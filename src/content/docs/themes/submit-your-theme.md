---
title: Submit your theme
---

If you want to share your theme with the community, the best way is to submit it to the [official list of themes](https://github.com/engramapp/releases/blob/main/community-css-themes.json). Once we've reviewed and published your theme, users can install it directly from within Engram. It'll also be featured in the [plugin directory]() on the Engram website.

You only need to submit the initial version of your theme. After your theme has been published, users can download new releases from GitHub directly within Engram.

:::note[Prerequisites]
To complete this tutorial, you'll need:
- a [Github](https://github.com/) account
:::

Step 1: Publish Your Theme to Github
---

<!-- :::note
If you created your theme from one of our template repositories, you may skip this step.
::: -->

When submitting your theme, you need to make sure you have the following files in the root folder of your repository:
- A `README.md` that describes the theme.
- A `LICENSE` that determines how others are allowed to use the theme and its source code. If you need help to pick a license for your theme, refer to [Choose a License](https://choosealicense.com/).
- A screenshot of your theme to be displayed in the theme browser. Recommended image dimensions: `512 x 288` pixels.
- A `manifest.json` for metadata information. For more information, refer to the [Manifest](/reference/manifest) page.

To review your theme, we need to access to the source code on GitHub. If you're unfamiliar with GitHub, refer to the GitHub docs for how to [Create a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

Step 2: Submit your theme for Review
---

1. In `community-css-themes.json`, add a new entry at the end of the JSON array. The following example shows the entry for the Minimal theme.
```json
{
  "name": "Sample Theme",
  "author": "engram",
  "repo": "engramapp/sample-theme",
  "screenshot": "screenshot.png",
  "modes": ["dark"]
},
```
- `name` and `author` determines how your plugin appears to the user, and should match the corresponding properties in your Manifest.
- `repo` is the relative path to your GitHub repository. 
> For example, if your GitHub repo is located at `https://github.com/your-username/your-repo-name`, the path is `your-username/your-repo-name`.
- `screenshot` is the path to a screenshot of your theme. The screenshot looks best with a `16:9` aspect ratio. Recommended image dimensions: `512 x 288` pixels.
- `modes` lists the color modes that your theme supports.

Remember to add a comma after the closing brace, `}`, of the previous entry.

2. Select **Commit changes...** in the upper-right corner.
3. Select **Propose changes**.
4. Select **Create pull request**.
5. Select **Preview**, and then select **Community Theme**.
6. Click **Create pull request**.
7. In the name of the pull request, enter "Add [...] theme", where [...] is the name of your theme.
8. Fill in the details in the description for the pull request. For the checkboxes, insert an `x` between the brackets to mark them as done (`[x]`).
9. Click **Create pull request**.

Congratulations 🥳! You've now submitted your theme to Engram. It's time to wait for the review process.

Step 3: Address review comments
---
After reviewing, the reviewer will add a comment to your pull request with the results.

You may be asked to make updates to your theme or repo. Please address these concerns and update your Github release with the new changes. Please do not make a new repo.

After everything is verified and approved, your theme will get published and users will be able to start using it.

What's Next
---

Congratulations, again 🥳! You've now published your theme to Engram and others should know about it!

You can:
- Share it with our [Discord community](/). <!-- You will need the **developer** [role](/) to post in `#updates`. -->
- Share it on social media and tag us!

If you wish to extend Engram further, please look into our [plugin documentation](/plugins/build-a-plugin).