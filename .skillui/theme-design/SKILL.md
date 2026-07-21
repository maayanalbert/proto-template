---
name: theme-design
description: Design system skill for theme. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX.
---

# theme Design System

You are building UI for **theme**. Light-themed, neutral palette, sans-serif typography (sans-serif), compact density on a 4px grid, flat elevation (no shadows).

## Design Philosophy

- **Solid colors only** — no gradients anywhere. Every surface is a single flat color.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **neutral palette** — the color temperature runs neutral, matching the sans-serif typography.
- **Subtle motion** — transitions smooth state changes. Keep durations under 300ms, use ease-out curves.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#f6f7f9` | Page/app background |
| Surface | `--surface` | `#e5e7eb` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#171717` | Headings, body text |
| Text Muted | `--text-muted` | `#9ca3b0` | Captions, placeholders |
| Border | `--border` | `#262626` | Dividers, card borders |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Warning | `#fed6a9` | Caution states, pending items |
| Danger | `#fec8c8` | Errors, destructive actions |

### Extended Palette

- **cal-border-semantic-error:** `#641717` — Destructive actions, error states
- **cal-bg-primary:** `#1d2735`
- **cal-bg-primary-emphasis:** `#3c3e44`
- **cal-border:** `#d1d5db`
- **cal-border:** `#4d4d4d`
- **cal-border-emphasis:** `#737373`
- **cal-border-semantic-attention-subtle:** `#67250f` — Secondary text, placeholder text

### CSS Variable Tokens

```css
--cal-bg-muted: hsla(210,20%,97%,1);
--cal-bg-primary: hsla(214,30%,16%,1);
--cal-bg-primary-emphasis: hsla(220,6%,25%,1);
--cal-bg-primary-muted: hsla(220,14%,94%,1);
--cal-bg-brand-muted: hsla(220,14%,94%,1);
--cal-border-emphasis: hsla(218,11%,65%,1);
--cal-border: hsla(216,12%,84%,1);
--cal-border-subtle: hsla(220,13%,91%,1);
--cal-border-muted: hsla(220,14%,94%,1);
--cal-border-error: hsla(0,96%,89%,1);
--cal-border-semantic-error: hsla(0,96%,89%,1);
--cal-border-semantic-attention-subtle: hsla(32,98%,83%,1);
--cal-border-semantic-error-subtle: hsla(0,96%,89%,1);
--cal-border-booker: var(--cal-border-subtle);
--cal-text-muted: hsla(218,11%,65%,1);
--fill-muted: var(--cal-text-muted,#9CA3AF);
```

## Typography

### Font Stack


### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|

### Typography Rules

- All text uses **sans-serif** — never add another font family
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`4, 8, 12, 16, 20, 24, 32, 40, 48, 64` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `8px`
Default: `8px`

## Component Patterns

### Card

```css
.card {
  background: #e5e7eb;
  border: 1px solid #262626;
  border-radius: 8px;
  padding: 16px;
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #cccccc;
  color: #171717;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #262626;
  color: #171717;
  border-radius: 8px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #f6f7f9;
  border: 1px solid #262626;
  border-radius: 8px;
  padding: 8px 12px;
  color: #171717;
  font-size: 14px;
}
.input:focus { border-color: var(--accent); outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #e5e7eb;
  color: #9ca3b0;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #e5e7eb;
  border: 1px solid #262626;
  border-radius: 8px;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #9ca3b0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #262626;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #262626;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #262626;
}
.nav-link {
  color: #9ca3b0;
  padding: 8px 12px;
  border-radius: 8px;
  transition: color 150ms;
}
.nav-link:hover { color: #171717; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

## Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without calling attention.

### CSS Animations

- `fade-in-up`
- `spinning`
- `drawerSlideLeftAndFade`
- `drawerSlideRightAndFade`

### Motion Guidelines

- **Duration:** 150-300ms for micro-interactions, 300-500ms for page transitions
- **Easing:** `ease-out` for enters, `ease-in` for exits
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

This design uses **flat elevation** — no box-shadows anywhere.

### Elevation Strategy

| Level | Technique | Use |
|-------|-----------|-----|
| 0 — Base | Background color | Page background |
| 1 — Raised | Lighter surface + subtle border | Cards, panels |
| 2 — Floating | Even lighter surface + stronger border | Dropdowns, popovers |
| 3 — Overlay | Backdrop + modal surface | Modals, dialogs |

## Anti-Patterns (Never Do)

- **No box-shadow** on any element — use borders and surface colors for depth
- **No gradients** — solid colors only, everywhere
- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No arbitrary border-radius** — use the scale: 8px
- **No opacity for disabled states** — use muted colors instead
- **No pill shapes** — this design doesn't use rounded-full / 9999px radius

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — project font only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — flat, surface color shifts only
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec


## Quick Reference

```
Background:     #f6f7f9
Surface:        #e5e7eb
Text:           #171717 / #9ca3b0
Accent:         (not extracted)
Border:         #262626
Font:           sans-serif
Spacing:        4px grid
Radius:         8px
Components:     0 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for theme
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "theme" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# theme DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 14 · Fonts: 0 · Components: 0
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: subtle

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a neutral, approachable feel. The light background emphasizes content clarity. Typography uses **sans-serif** throughout — a clean, modern choice that maintains consistency. Spacing follows a **4px base grid** (compact density), with scale: 4, 8, 12, 16, 20, 24, 32, 40px. Motion is subtle — smooth transitions (150-300ms) ease state changes without drawing attention.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| cal-bg-muted | `#f6f7f9` | background | Page background, darkest surface |
| cal-border-subtle | `#e5e7eb` | surface | Card and panel backgrounds |
| cal-bg-muted | `#171717` | text-primary | Headings and body text |
| cal-border-emphasis | `#9ca3b0` | text-muted | Captions, placeholders, secondary info |
| cal-bg-primary-muted | `#262626` | border | Dividers, card borders, outlines |
| cal-border-error | `#fec8c8` | danger | Error states, destructive actions |
| cal-border-semantic-attention-subtle | `#fed6a9` | warning | Warning states, caution indicators |
| cal-border-semantic-error | `#641717` | unknown | Palette color |
| cal-bg-primary | `#1d2735` | unknown | Palette color |
| cal-bg-primary-emphasis | `#3c3e44` | unknown | Palette color |
| cal-border | `#d1d5db` | unknown | Palette color |
| cal-border | `#4d4d4d` | unknown | Palette color |
| cal-border-emphasis | `#737373` | unknown | Palette color |
| cal-border-semantic-attention-subtle | `#67250f` | unknown | Palette color |

### CSS Variable Tokens

```css
--cal-bg-muted: hsla(210,20%,97%,1);
--cal-bg-primary: hsla(214,30%,16%,1);
--cal-bg-primary-emphasis: hsla(220,6%,25%,1);
--cal-bg-primary-muted: hsla(220,14%,94%,1);
--cal-bg-brand-muted: hsla(220,14%,94%,1);
--cal-border-emphasis: hsla(218,11%,65%,1);
--cal-border: hsla(216,12%,84%,1);
--cal-border-subtle: hsla(220,13%,91%,1);
--cal-border-muted: hsla(220,14%,94%,1);
--cal-border-error: hsla(0,96%,89%,1);
--cal-border-semantic-error: hsla(0,96%,89%,1);
--cal-border-semantic-attention-subtle: hsla(32,98%,83%,1);
--cal-border-semantic-error-subtle: hsla(0,96%,89%,1);
--cal-border-booker: var(--cal-border-subtle);
--cal-text-muted: hsla(218,11%,65%,1);
--fill-muted: var(--cal-text-muted,#9CA3AF);
```


---

## 3. Typography Rules

No typography tokens detected.

---

## 4. Component Stylings

No components detected. Scan `src/components/` or `components/` to populate this section.

---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64
- **Border radius:** 8px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

No box-shadow values detected. The design appears to use a flat visual style.


---

## 7. Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without demanding attention.

### CSS Animations

- `@keyframes fade-in-up`
- `@keyframes spinning`
- `@keyframes drawerSlideLeftAndFade`
- `@keyframes drawerSlideRightAndFade`

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#f6f7f9` as the primary page background
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use border and background shifts for elevation — not shadows
- Use border-radius from the scale: 8px

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't add box-shadow — this design system uses flat elevation
- Don't use gradients — the design uses solid colors only
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No box-shadow on any element
- No gradient backgrounds
- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

No breakpoints detected. Consider adding responsive breakpoints to the design system.

---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #e5e7eb
Border: 1px solid #262626
Radius: 8px
Padding: 16px
Font: sans-serif
No shadows — use borders and surface colors for depth.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border #262626
Padding: 8px 16px
Radius: 8px
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #f6f7f9
Max-width: 1280px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #e5e7eb
Label: #9ca3b0 (muted, 12px, uppercase)
Value: #171717 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #f6f7f9
Input border: 1px solid #262626
Focus: border-color var(--accent)
Label: #9ca3b0 12px
Spacing: 16px between fields
Radius: 8px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: sans-serif, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: flat, surface shifts
```

