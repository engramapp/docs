---
title: Build a theme
---

In this tutorial, you'll learn how to start developing a theme for Engram. Themes let you customize how Engram looks and feels, using CSS.

:::note[Prerequisites]
To complete this tutorial, you'll need:
- [Git](https://git-scm.com/) installed on your local machine.
- A text editor, such as [Visual Studio Code](https://code.visualstudio.com/).
:::

Step 1: Download the sample theme
---
Themes are stored in the [application data directory](https://help.engramapp.com/engram/file-locations) for Engram.

The sample theme is available in our [Github repo](https://github.com/engramapp/sample-theme).

1. Open a terminal and navigate to your themes directory.

```bash
cd path/to/appdata/themes
```

2. Clone the sample repo using `git`.

```bash
git clone https://github.com/engramapp/sample-theme.git "Sample Theme"
```

<!-- :::tip
The repository for the sample theme is a GitHub template repository, which means you can create your own repository from the sample theme. To learn how, refer to Creating a repository from a template.

Remember to use the URL to your own repository when cloning the sample theme.
::: -->

Step 2: Enable the theme
---
1. In Engram, open **Settings**.
2. In the side menu, select **Appearance**.
3. Next to Themes, select "Sample Theme" from the dropdown list.

You've enabled the sample theme. Next, we'll make some changes to it.

Step 3: Update the manifest
---
You can rename your theme by updating the manifest, a file named as `manifest.json`.

The manifest contains information about your theme, such as its name, description and other relevant information.

1. Open `manifest.json` in your text editor.
2. Change `name` to a human-friendly name, such as "Straw Hat".
3. Re-name the theme directory under themes to the same name. The name of the theme directory must exactly match the name property in `manifest.json``.
```
mv "Sample Theme" "Straw Hat"
```
3. Restart Engram to load the new changes to the manifest.

Go back to **Settings** → **Appearance** → **Themes** and notice that the name of the theme has been changed.

Remember to restart Engram whenever you make changes to `manifest.json`.

Step 4: Make changes with CSS
---
Engram uses [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) to style the user interface. This enables users to customize the look and feel to create highly expressive themes.

- In `engram.css`, add the following:

```css
body {
  --font: Georgia, serif;
}
```

- Themes can support both light and dark color schemes. You can take advantage by grouping your CSS variables under `.dark-theme `or `.light-theme`.

```css
.dark-theme {
  --background-primary: #18004F;
  --background-secondary: #220070;
}

.light-theme {
  --background-primary: #ECE4FF;
  --background-secondary: #D9C9FF;
}
```

Step 5: Discover CSS variables
---
Engram exposes more than 300 different CSS variables for customizing different parts of the user interface.

You can find many of these variables available under [CSS variables](/).


What's Next
---
Congratulations! You now have a custom theme for Engram.

After creating your theme, you can [submit your theme](/themes/submit-your-theme) for others to use.


