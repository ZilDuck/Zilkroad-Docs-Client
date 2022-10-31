---
lang: en-US
title: Immutable onchain - token_uri
meta:
  - name: description
    content: How to mint a token using token_uri
  - name: keywords
    content: Zilkroad Creator Guide token_uri Zilliqa
---

## Step 3 - Minting with token_uri

At this point, we have a contract deployed. We have our resource uploaded and our metadata uploaded.

We are now going to mint a new token with the token_uri being the content being a pointer to our metadata.

## Requirements

* A deployed ZRC-6 contract created from Step 1.
* Some digital assets to Mint created from Step 2.
* Some ZIL funds.
* Patience.

## Self mint via the IDE

The easiest way to get started is to Mint the tokens to yourself to sell.

Once the NFT tokens appear in your wallet after the transactions has confirmed - you will be able to list it for sale.

As stated in the previous section, call Mint with your wallet (starting 0x...) as the recipient.

![image](/img/developer-guide/mint-call.png)
