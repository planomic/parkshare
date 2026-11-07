# TextField

A labelled single-line input, as in the landing page's contact form: name, email, license plate.

The consumer provides a visible label (connected with `<label for>`), the input's `id`, `type` and `autocomplete`, and optional helper text. Field: 48px tall, `surface` fill, 1px `field-border`, `radius-md`, 14px side padding, `body` text. Label in `label` style above the field, `space-1` apart. On focus: the `focus` ring. Because the light `field-border` is faint (about 2:1 on white), never use a field without its visible label, and never use placeholder text as the label. License plates: uppercase, `autocapitalize="characters"`.
