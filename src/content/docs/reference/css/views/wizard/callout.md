---
title: Callout
---

This page details CSS classes and variables for Callouts.

| Variable | Description |
| -------- | -------- |
| `--callout-color-default` | Default callout color |
| `--callout-border-width` | Callout border width |
| `--callout-border-color` | Callout border color |
| `--callout-padding` | Callout padding |
| `--callout-radius` | Callout radius |
| `--callout-title-color` | Callout title text color |
| `--callout-title-padding` | Callout title padding |
| `--callout-title-size` | Callout title font size |
| `--callout-title-weight` | Callout title weight |

Sizing can be controlled through variables found in [Block](/reference/css/views/wizard/block).

Type colors
---
Callout types have unique icons and colors, and may have multiple aliases.

Different callouts can be created or modified through a CSS `data-callout` selector.

For Example:
```css
.editor-callout[data-callout="warning"] {
    --callout-color: var(--color-red-rgb);
    --callout-icon: triangle-alert;
}
```
- `--callout-icon` is the slug of the icon found in the [Lucide](https://lucide.dev/) icon library.
- `--callout-color` is the color of the callout represented as an `rgb` value.

Currently recognized values are as follows:
- warning
- tip
- success
- hint
- quote
- caution
- error