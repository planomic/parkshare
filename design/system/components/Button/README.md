# Button

The action control: primary (blue fill), secondary (ink outline) and dark (ink fill), as on the landing page.

- **Primary** (`accent` fill, `on-accent` label): the one main action on a screen, "Book plads", "Betal 75 kr.".
- **Secondary** (transparent, 1px `ink` border, `ink` label): the alternative next to a primary.
- **Dark** (`ink` fill, `ground` label): a strong action on a light page where blue is already in use, such as the nav button.

The consumer provides the label (a verb phrase in Danish, sentence case) and, in the app, a full-width container. Height 52px (48px minimum), `radius-md`, label in `body` at weight 600. Visible `focus` ring. Use a real `<button>` for actions and `<a href>` for navigation. Never two primary buttons side by side.
