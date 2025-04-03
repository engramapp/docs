---
title: Colors
---

The color palette defines a range of colors used in the app.

Base colors
---
The base colors is a neutral color palette ranging from light to dark. These values should typically only be defined by themes.

| Variable | Light Mode Default | Dark Mode Default |
| -------- | -------- | -------- |
| `--color-base-00` | #ffffff | #181926 |
| `--color-base-05` | #eeeeee | #1e2030 |
| `--color-base-10` | #fcfcfc | #24273a |
| `--color-base-20` | #dedede | #363a4f |
| `--color-base-25` | #7d84a2 | #484c64 |
| `--color-base-30` | #6c728d | #5a5f78 |
| `--color-base-35` | #5a5f78 | #6c728d |
| `--color-base-40` | #484c64 | #7d84a2 |
| `--color-base-50` | #737478 | #8f97b7 |
| `--color-base-60` | #707070 | #a1aacb |
| `--color-base-70` | #4a4a4f | #b3bce0 |
| `--color-base-100` | 15 15 15 | 197 207 245 |

:::note
Colors with a default value type of `rgb` must be given a `rgb` value in the same format, with no commas.

For example:
- `--color-base-100: 197 207 245;` is recognized.
- `--color-base-100: 197, 207, 245;` is not recognized.
:::


Accent color
---
The accent color is used in various places throughout the app, such as decks and primary buttons, and can be overridden by the user under **Settings** → **Appearance** in the Engram app.

| Variable | Default value |
| -------- | -------- |
| `--accent` | 169 213 249 |

Extended Colors
---
Extended color variables define the broader range of colors used for status messages (errors, warnings, success), callouts, syntax highlighting, and graph nodes.

Extended colors have an additional RGB variable with a `-rgb` suffix that you can use to create colors with opacity, using the `rgb` function.

For example, the following snippet uses the default variable to set the text color, and the RGB variable to set a background color to red with 20% opacity.

```css
body {
    color: var(--color-red);
    background-color: rgb(var(--color-red-rgb) / 0.2);
}
```

| Variable | Light Mode Default | Dark Mode Default |
| -------- | -------- | -------- |
| `--color-red` | #c35858 | #c35858 |
| `--color-yellow` | #fbbf24 | #fbbf24 |
| `--color-green` | #4ade80 | #4ade80 |
| `--color-green-alt` | #58CC02 | #58CC02 |
| `--color-blue` | #60a5fa | #60a5fa |
| `--color-cyan` | #89ddff | #89ddff |
| `--color-purple` | #a78bfa | #a78bfa |
| `--color-gold` | #FFBF00 | #eab308 |
| `--color-red-rgb` | 195 88 88 | 195 88 88 |
| `--color-yellow-rgb` | 251 191 36 | 251 191 36 |
| `--color-green-rgb` | 74 222 128 | 74 222 128 |
| `--color-blue-rgb` | 96 165 250 | 96 165 250 |
| `--color-cyan-rgb` | 137 221 255 | 137 221 255 |
| `--color-purple-rgb` | 167 139 250 | 167 139 250 |
| `--color-gold-rgb` | 255 191 0 | 234 179 8 |

Black and white
---
Black and white colors let you create masks with opacity.
| Variable | Light Mode Default | Dark Mode Default |
| -------- | -------- | -------- |
| `--mono-rgb-0` | 255 255 255 | 0 0 0 |
| `--mono-rgb-100` | 0 0 0 | 255 255 255 |

:::caution[Warning]
Avoid changing the value of black and white variables.
:::

Semantic colors
---
Semantic colors are derived from the base color palette based on their intended use.

| Variable | Description |
| -------- | -------- |
| `--background-primary` | Primary background |
| `--background-primary-alt` | Background for surfaces on top of primary background |
| `--background-primary-translucent` | Background thats used to turn the primary color translucent |
| `--background-secondary` | Secondary background |
| `--background-secondary-alt` | Background for surfaces on top of secondary background |
| `--background-secondary-translucent` | Background thats used to turn the secondary color translucent |
| `--background-modifier-hover` | Hovered elements |
| `--background-modifier-active-hover` | Active hovered elements |
| `--background-modifier-border` | Border color |
| `--background-modifier-border-hover` | Border color on hover |
| `--background-modifier-error` | Error background |
| `--background-modifier-error-active` | Error background (active) |

Interactive colors
---

Colors used for the backgrounds of various interactive elements like buttons and selects.

| Variable | Description |
| -------- | -------- |
| `--interactive-normal` | Background for standard interactive elements |
| `--interactive-hover` | Background for standard interactive elements on hover |
| `--interactive-accent` | Background for accented interactive elements |

Text Foreground
---
| Variable | Description |
| -------- | -------- |
| `--text-normal` | Normal text |
| `--text-muted` | Muted text |
| `--text-faint` | Faint text |
| `--text-on-accent` | Text on accent background when accent is dark |
| `--text-on-accent-inverted` | Text on accent background when accent is light |
| `--text-success` | Success text |
| `--text-warning` | Warning text |
| `--text-error` | Error text |
| `--text-accent` | Accent text |