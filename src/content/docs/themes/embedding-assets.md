---
title: Embedding Assets
---

This page guides you on ways to include assets, like fonts or images, in your theme.

Due to privacy concerns, community themes aren't allowed to load remote assets. However, developers can still include these assets with their theme through **embeds**.

Use data URLs
---
To include assets such as fonts, icons, and images in your theme, you need to embed them in the CSS file by passing a [data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) to the `url()` CSS function.

You can format the data URL as:
```css
url("data:<MIME_TYPE>;base64,<BASE64_DATA>")
```
- Replace `<MIME_TYPE>` with the [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for your asset.
- Replace `<BASE64_DATA>` with the [Base64](https://en.wikipedia.org/wiki/Base64) encoded representation of your asset.

Encoding assets
---
For instructions on how to encode an asset into base64, refer to [Encoding data into base64 format](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs#encoding_data_into_base64_format).


Consider file size
---
Embedding assets increases the file size of your theme, which may lead to poor performance in the following situations:
- Downloading and updating your theme from the community theme directory.
- Loading and using your theme in the Engram app.