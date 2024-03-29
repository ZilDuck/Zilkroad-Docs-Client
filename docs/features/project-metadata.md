---
lang: en-US
title: Project Metadata
meta:
  - name: description
    content: Project Specific Metadata for NFTs
  - name: keywords
    content: Zilkroad Project Specific Metadata ZRC-7
---

## Banners

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

You can extend this schema with the following fields to augment your collection on Zilkroad.

Please use `collection_image_url` for the image associated with your NFT contract.

```json
{
  ...
  "collection_image_url": "https://example.com/image.jpg",
  "discord": "https://discord.gg/example",
  "twitter": "https://twitter.com/example",
  "telegram": "https://www.instagram.com/example/"
}
```

Now your contract has an image and social media connected.

<p align="center">
  <img src="/img/features/metadata.png">
</p>