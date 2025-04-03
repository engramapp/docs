---
title: Theme Guidelines
---

This page lists our recommendations for building themes that are both reliable and maintainable. By following these guidelines, you can minimize the maintenance work to keep your theme updated with future versions of Engram.

For more information about general guidelines for developers, refer to [Developer policies](/developer-policy).

Use CSS variables
---
Since most of Engram's user interface uses CSS variables, you can create highly expressive themes by merely overriding the built-in CSS variables. Engram currently exposes more than **300 different CSS variables**, which you can find in the [reference docs]().

:::note
Engram's Developer Implementation is currently in **beta**.

For full-release, developers can expect more variables to take advantage of, and some existing CSS variables to change.
:::

Keep assets local
---
Per our [Developer policies](/developer-policy), themes must not load any remote assets, such as fonts and images, that are unavailable when the user is offline. Even if the user has access to the internet, **loading remote assets may violate user privacy**.

If you wish to include additional assets, they must be included directly with your theme. Please see [Embedding Assets](/themes/embedding-assets)


Good CSS Practices
---
- **Keep specificity low**: Try to avoid overly complex selectors targeting specific classes.
- **Avoid `!important` declarations**: Declaring styles as `!important` inhibits users from overriding styles from your theme.