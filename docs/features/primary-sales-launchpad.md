---
lang: en-US
title: Primary Sales / Launchpad
meta:
  - name: description
    content: Do your inital mint offering using the Zilkroad UI
  - name: keywords
    content: Zilkroad Primary Sales Inital Mint Offering Zilliqa
---

## What is a Launchpad?

Launchpads are the function of selling NFTs from an initial minting process, typically via a project's website.

Zilkroad can offer project owners the ability to sell tokens from the Zilkroad launchpad if they can configure a contract in the correct way.

## How do I get a launchpad listing?

* token_uri **must not** be used.
* base_uri **must** be set.
* base_uri/token_id **must** resolve to valid ZRC-7 metadata.
* base_uri/metadata.json **should** resolve to valid project level metadata including an image.

If you can demonstrate the following contract on **testnet**. Please contact hello@zilkroad.io with the subject line \[Launchpad listing\]. Provide a **testnet** viewblock link to your contract with some tokens minted. Please also provide the below information.

* How many tokens do you want to sell?
* What ZIL price would you like to sell each NFT at?
* What is your fixed supply?
* Are you planning on minting tokens outside of Zilkroad?

There is a one time **setup fee** of 5000 ZIL if your application is successful.

There is a **royalty charge** of 20% of overall sales proceeds on your proxy.

## How does the launchpad process work?

If your application is successful, Zilkroad will deploy a sales proxy on your behalf. The proceeds of which will go into an escrow which can distribute funds between the launchpad project wallet and Zilkroad in a trustless decentralised way.

Either (you) the launchpad project wallet or (us) Zilkroad may call to split the proxy funds and the proxy will be split 80% to the project and 20% to Zilkroad.

You will be given your proxy contract address on it's creation so that you may call it at your leisure.

You will also need to configure your NFT contract to include the proxy as a Minter so that it is allowed to Mint tokens. If this is not done then your proxy will not be allowed to Mint tokens and complete the sale.

Zilkroad will help create advertising and marketing material around your launch which includes :

* 2 weeks of advertising a banner provided by your project
* Twitter AMA
