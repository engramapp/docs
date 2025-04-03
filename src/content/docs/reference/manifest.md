---
title: Manifest
---

This page describes the schema for the `manifest.json` file.

Properties
---
The following properties are available for both plugins and themes.

| Property | Type | Required | Description |
| -------- | ------- | --------- | --- |
| author | string | ✓ | The author's name. |
| minAppVersion | string | ✓ | The minimum required Engram version. |
| name | string | ✓ | The display name. |
| version | string | ✓ | The version, using [Semantic Versioning](https://semver.org/). | 		
| authorURL | string |  | A URL to the author's website. |
| fundingURL | string or [object](/reference/manifest#funding-url) |  | A URL or multiple URLs to where the users can support your project financially. |

Funding URL
---
`fundingUrl` can either be a string with a single URL string, or an object with multiple URLs.

```json
/* manifest.json */
{
  "fundingUrl": {
    "Buy Me a Coffee": "https://buymeacoffee.com",
    "GitHub Sponsor": "https://github.com/sponsors",
    "Patreon": "https://www.patreon.com/"
  }
}
```

Plugin-specific properties
---

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| description | string | ✓ | A description of the plugin |
| id | string | ✓ | An ID, typically a slug i.e. `sample-plugin`. |