---
lang: en-US
title: Project-Level metadata
meta:
  - name: description
    content: How to present optional fields for your nft contract
  - name: keywords
    content: Zilkroad Creator Guide project level metadata base_uri Zilliqa
---

## Step 4 - Project level metadata

An NFT contract can also expose metadata at the collection level.

Project level metadata can be found in the location `<base_uri>/metadata.json` where base_uri looks like `www.api.example.com/` and the file `metadata.json` should be resolved.

ZRC-7 provides a basic schema for how projects should define their metadata.

```json
{
  "name": "Unique and Diverse Creatures",
  "description": "10,000 unique and diverse creatures living on the blockchain.",
  "external_url": "https://example.com/creature",
  "animation_url": "https://animation.example.com/creature"
}
```

You can extend this schema with the following fields to augment your collection on Zilkroad

```json
{
  ...
  "collection_image_url" : "https://example.com/image.jpg",
  "discord" : "https://discord.gg/example",
  "twitter" : "https://twitter.com/example"
}
```

Your collection is now ready to be listed!
