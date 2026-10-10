# Responsive Navbar with Hamburger Menu

A responsive navigation mini-project built with **HTML5, CSS3, and vanilla JavaScript**. It provides a horizontal navigation bar on larger screens and a collapsible menu on mobile.

## Features

- Responsive desktop, tablet, and mobile layout
- Hamburger button that animates into a close icon
- Smooth menu open/close transition
- Accessible button label and `aria-expanded` state
- Menu closes after selecting a link, pressing `Escape`, or resizing to desktop
- Active navigation-link styling
- No frameworks, build tools, or external JavaScript dependencies
- Reduced-motion preference support

## Project files

```text
responsive-navbar-project/
├── index.html   # Semantic page structure and navigation
├── style.css    # Layout, colors, responsive breakpoint, transitions
├── script.js    # Menu toggle and keyboard/resize interactions
└── README.md    # Project documentation
```

## Approach

1. **Structure with HTML:** Use a semantic `<header>` and `<nav>`, a list for navigation links, and a real `<button>` for the hamburger control.
2. **Style with CSS:** Use Flexbox and CSS Grid for layout. At `700px` and below, hide the desktop-style navigation and position the links in a collapsible panel.
3. **Add interaction with JavaScript:** Toggle the `is-open` class, update `aria-expanded`, and close the menu after link selection, Escape, or a switch back to desktop width.
4. **Consider accessibility:** Use descriptive labels, keyboard support, semantic elements, and a reduced-motion media query.

## How to run

1. Download or clone this project.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in a modern browser. For convenient development, you can use the VS Code **Live Server** extension.
4. Resize the browser below and above `700px` to test both layouts.

No installation or server is required.

## Expected outcome

- **Desktop:** Brand on the left and navigation links in one horizontal row on the right.
- **Mobile:** A hamburger button appears. Tapping it reveals a menu with a smooth transition; tapping again closes it.
- **Interaction:** The icon transforms into an X while open, links update the active state, and Escape closes the menu.
- **Visual design:** A professional navy, blue, orange, and pale background palette with a responsive hero section and feature cards.

## Testing checklist

- [ ] Desktop navigation is visible at widths above 700px.
- [ ] Hamburger appears at widths of 700px and below.
- [ ] Menu opens and closes when the button is tapped/clicked.
- [ ] `aria-expanded` changes between `true` and `false`.
- [ ] Selecting a menu item closes the mobile menu.
- [ ] Escape closes the menu.
- [ ] Resizing back to desktop closes the mobile menu.
- [ ] Content fits without horizontal scrolling on a phone.

## Technologies

- HTML5
- CSS3 (Flexbox, Grid, media queries, transitions)
- JavaScript (DOM events and class toggling)

## Outcome summary

This project demonstrates the fundamentals of responsive navigation, media queries, class-based UI state, and small accessibility practices. It can be extended with a real logo, additional pages, or a dropdown menu.
