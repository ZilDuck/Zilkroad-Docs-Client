---
title: Advanced - base_uri
description: How to mint a token
---

## Step 3 - Minting with base_uri

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

As stated in the previous section, call Mint with your wallet (starting 0x...) as the recipient - **pass empty string as token_uri to enable base_uri/token**.

![image](/img/developer-guide/mint-call.png)

## Proxy mint website

The in-depth way of involving your users in the Mint process is to begin the selling from a project website.

Create a new Scilla contract called Proxy which is able to call Mint on your NFT contract for the user if they are sending the correct amount of funds.

The project website should be able to call this Proxy contract so that users are able to interact send funds and be returned an NFT.

Funds sent should be stored in the proxy and be retrieved by the proxy owner.
