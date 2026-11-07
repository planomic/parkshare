#!/usr/bin/env node
// Copies the app screens from design/app/*.dc.html into the "Appen" section of index.html.
//
// Each screen is rendered in its starting state (what the screen shows before anyone taps it)
// as plain HTML at 390 x 844, and placed between <!-- screen:Name --> markers in index.html,
// where the page scales it down into a phone frame.
//
// Usage, from the repo root:
//   node design/update-site-screens.js
// First copy the latest canvas files into design/app/ (see design/README.md).

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SCREENS = ['Main', 'Driver', 'Arrived'];

function render(file, idPrefix) {
  const src = fs.readFileSync(file, 'utf8');
  const js = src.match(/data-dc-script[^>]*>([\s\S]*?)<\/script>/)[1];
  class DCLogic {
    constructor(p) { this.props = p || {}; }
    setState(x) { Object.assign(this.state, x); }
  }
  const Component = new Function('DCLogic', js + ';return Component;')(DCLogic);
  const vals = new Component({}).renderVals();

  let body = src.match(/<x-dc>([\s\S]*?)<\/x-dc>/)[1].replace(/<helmet>[\s\S]*?<\/helmet>/, '');
  const get = (p, scope) => p.trim().split('.').reduce((o, k) => (o == null ? o : o[k]), scope);
  const fill = (t, scope) => t.replace(/\{\{\s*([\w.$]+)\s*\}\}/g, (_, p) => {
    const v = get(p, scope);
    return v == null ? '' : String(v);
  });

  // Repeats and conditions (the screens don't nest these).
  body = body.replace(/<sc-for list="\{\{\s*([\w.]+)\s*\}\}" as="(\w+)"[^>]*>([\s\S]*?)<\/sc-for>/g,
    (_, list, as, inner) => (get(list, vals) || [])
      .map((item, i) => fill(inner, Object.assign({}, vals, { [as]: item, $index: i }))).join(''));
  body = body.replace(/<sc-if value="\{\{\s*([\w.]+)\s*\}\}"[^>]*>([\s\S]*?)<\/sc-if>/g,
    (_, v, inner) => (get(v, vals) ? inner : ''));

  // A picture of the app: no event handlers.
  body = body.replace(/\s+on[A-Z]\w*="\{\{[^}]*\}\}"/g, '');
  body = body.replace(/\s+(disabled|checked)="\{\{\s*([\w.]+)\s*\}\}"/g, (_, a, p) => (get(p, vals) ? ` ${a}` : ''));
  body = fill(body, vals);

  if (/\{\{|<sc-/.test(body)) throw new Error(`${file}: template code left after rendering`);
  // ids must be unique on the page.
  body = body.replace(/\b(id|for|aria-labelledby)="([^"]+)"/g, (_, a, v) => `${a}="${idPrefix}-${v}"`);
  return body.trim();
}

const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
for (const name of SCREENS) {
  const start = `<!-- screen:${name} -->`;
  const end = `<!-- /screen:${name} -->`;
  const a = html.indexOf(start);
  const b = html.indexOf(end);
  if (a < 0 || b < a) throw new Error(`index.html: markers for ${name} not found`);
  const rendered = render(path.join(__dirname, 'app', `${name}.dc.html`), name.toLowerCase());
  html = html.slice(0, a + start.length) + '\n' + rendered + '\n' + html.slice(b);
  console.log(`updated ${name}`);
}
// The gate drawing: its picture and its four steps, made to fit the page width.
{
  const start = '<!-- drawing:Gate -->';
  const end = '<!-- /drawing:Gate -->';
  const a = html.indexOf(start);
  const b = html.indexOf(end);
  if (a < 0 || b < a) throw new Error('index.html: markers for the gate drawing not found');
  const src = fs.readFileSync(path.join(__dirname, 'app', 'Gate.dc.html'), 'utf8');
  const svg = src.match(/<svg[\s\S]*?<\/svg>/)[0]
    .replace(/<svg width="\d+" height="\d+" viewBox="([^"]+)"/,
      '<div style="overflow-x: auto; border-radius: 14px"><svg viewBox="$1" style="display: block; width: 100%; min-width: 640px; height: auto"')
    .replace(/<\/svg>$/, '</svg></div>');
  const steps = src.match(/<ol[\s\S]*?<\/ol>/)[0]
    .replace('grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px;',
      'grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px 32px;');
  html = html.slice(0, a + start.length) + '\n' + svg + '\n' + steps + '\n' + html.slice(b);
  console.log('updated Gate drawing');
}

fs.writeFileSync(indexPath, html);
