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
