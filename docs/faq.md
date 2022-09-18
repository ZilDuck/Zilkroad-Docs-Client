---
title: Frequently Asked Questions
meta:
  - name: description
    content: Check our frequently asked questions for Zilkroad
  - name: keywords
    content: Zilkroad FAQ Zilliqa
---

## What is Zilkroad?

Zilkroad is an NFT marketplace built on the Zilliqa blockchain, Decentralised and permissionless - allowing anyone to buy or sell Zilliqa-based NFTs.

Zilkroad aims to help promote artists and creators by providing them with a trustless marketplace to share, sell and aquire royalty through sales of their art.

## Secondary Sales

When it comes to selling NFTs you already own, once you've placed the order, it is stored in the marketplace contract and your NFT is moved to a custodial smart contract storage.

When someone buys your NFT, the marketplace transfers the correct amount of funds to the lister and royalty recipient from the buyer and the escrowed artwork you listed to the buyer. At this point, the sale is marked as complete and could be fulfilled when you're not at your computer.

The statistics of the buyer, seller, royalty recipient and collection are all updated to reflect this sale, so check your profile page's activity status to see historical activity for your listings.

You can at any point cancel the listing and get back your NFT, providing the transaction hasn't been marked as complete (sold). Equally, you can also change the token and amount before the listing is sold without having to delist and relist your NFT.

## Primary Sales / Launchpad

Primary sales allows NFT projects the ability to directly mint inistal sales through Zilkroad.

Users have the ability to buy directly from the zilkroad managed sales proxy and receive the NFT directly without leaving the site!

Creators have the ability to feature and sell their project directly through zilkroad without needing to setup a website. 

Read more about [Primary Sales / Launchpad](../features/primary-sales-launchpad.md).

## How do I trade with ZIL rather than tokens?

Zilkroad only supports ZRC-2 to be traded on the platform.

However native ZIL can be tokenised as a ZRC-2 token in a 1:1 ratio called 'Wrapped Zilliqa' or WZIL. WZIL can be unwrapped back into native ZIL.

<p align="center">
  <img width="200" height="200" src="/img/introduction/wzil_wrapper.png">
</p>

!!! tip Wrapped Zil
You can wrap ZIL into WZIL and unwrap WZIL into ZIL via the wrapper interface.
!!!

## How do I know if my NFT has sold?

On your profile page, there is an accounts historical activity which details the recent activity for your account.

The different types of activity rows that are tracked are:

* Listed a token
* Bought a token
* Edited a tokens price
* Sold a token
* Delist a token
* Recieved royalties
* Admin delisted a token

<p align="center">
  <img width="700" height="700" src="/img/introduction/sold_row.png">
</p>

## Can I get my NFT/funds back after buying/selling?

No, all transactions are immutable, isolated and final. Zilkroad has no control over funds or custody of NFT's pre, during or post transaction.

NFT's can be delisted prior to sale if it has not sold.

## How do I get started on Zilkroad?

First, you have to create a Zilliqa wallet, via ZilPay. Download the wallet extensions for your browser (and keep your secret phrase safe and secure, never share this with anyone!)

Buy ZIL on an exchange like Binance, Coinbase or FTX and send it to your wallet's public address. Consider sending a small amount first to ensure the funds arrive.

Once you've topped up your wallet with funds, connect your wallet to Zilkroad by clicking the 'Connect Wallet' button in the upper right corner, you're then ready to start trading on Zilkroad.

!!! tip web3 security
If this is your first time experiencing web3 and NFT's, welcome! Please take a moment to read up on good security practices for you and your new wallet, else risk all the funds on it! Beware.
!!!

## Is there a listing fee?

There is currently no listing fee.

This may change in the future, currently zilkroad is dedicated to bootstrapping NFT liquidity on Zilliqa by charging no listing fees.

## Is there a minimum listing amount for an item?

The minimum amount of fungible tokens that can be processed for a sales is 10 units of a token. This is because this is the amount of units required to calculate royalty correctly.

## What fees are included in the price of a listed NFT?

There is a royalty fee which is a percentage amount set by the creator.

Zilkroad has **no** control over how this fee is set and we respect the royalty amount which the creator has set. Zilkroad sends the a royalty percentage to the specified royalty recipient, even if this was 100%, it would be respected.

The higher the royalty, the less a seller will get on final purchase and the less likely they are to make a profit and the less volume your project will overall likely have.

!!! tip Sensible royalty
If you are a **creator or developer** set a sensible royalty between 0-15%. Do not change this without your communities consensus.
:::

!!! warning Royalty changing
If you are a **buyer or seller** beware of the projects ability to change the royalty.
!!!

## How do I know how much royalty I will pay?

When selling, buying or editing the price of an NFT, the current royalty percentage is read and from the token amount input, the total royalties can be determined ahead of time.

<p align="center">
  <img width="500" height="500" src="/img/introduction/royalties_modal.png">
</p>

See the [royalties page](../features/royalties.md) for more details about royalties.

## What are the gas fees like on the Zilliqa network?

The transaction fees on Zilliqa is minimal. However, we encourage users to have at least 10 ZIL in their wallet to ensure that their transaction can be processed.

| Action       | Estimated cost |
|--------------|----------------|
| List         | 5 ZIL          |
| Buy          | 8 ZIL          |
| Delist       | 4 ZIL          |
| Change Price | 4 ZIL          |

Gas is required to perform your action on the blockchain. If a transaction fails it will consume gas, but no action is taken.

It is recommended to use the default gas price.

## What is the price floor?

Since Zilkroad uses several tokens, it's useful to know what the lowest priced NFTs that are currently available for sale of a particular collection. The price floor is the lowest amount in USD that you could buy an item in the collection for.

In the below example the cheapest token available is NFT ID 88.

| NFT ID       | Token floor    | USD Floor |
|--------------|----------------|-----------|
| 22           | 1000 WZIL      | $75.18    |
| 44           | 2 GZIL         | $52.26    |
| 88           | 6969 XSGD      | $48.09    |

## Where can I view my NFTs?

Your profile page.

## How do people view my listings?

If you listed an NFT it will show up in that contract collection’s page, it will also be viewable as a listing on your profile page.

Share the link of your listing to prospective buyers via social media!

## How long will it take to get my ZIL once the sale confirms?

Immediately after the sale has confirmed.

## How do I request for marketing partnerships and collaborations?

Please check our [Advertising page](../features/adverts.md) for more details about the services which we can offer.

## Can I list artwork that may be considered NSFW?

Yes, although any illegal content will be removed from the site.

Zilkroad implements [CSAM scanning](https://blog.cloudflare.com/the-csam-scanning-tool/) on all digital assets which load under it's domain, so some assets maybe falsely reported on due to the fuzzy hashing.

## I sold my NFT but I didn't get any funds / I bought an NFT but I didnt get the NFT

We hope this is impossible by design.

If the transaction succeeded, then everything that executed inside is atomic. One could not have happened without the other.

If the transaction errored then no state change occured on-chain and you still have your funds / NFT.

Please post any transaction links which concern you in the Discord and our helpful community members will be happy to investigate what happened.

## Where do I go for technical support?

If you are having an issue, please head to our Discord server and **search for your issue** - it may have already been asked!

If you can't find anything - **post a detailed description** in the support channel and provide viewblock transaction links so our community developers can help you.

For more general enquiries, please feel free to reach out to our friendly team members and helpful community members in our official Discord Group.

## What are calender events?

The calender can be used to communicate to a wider audience about events in your community which you'd like to promote.

Check our [calendar feature](./../features/calendar.md) page for infomation about getting your event posted in the calender.

## What are the different types of advertisements supported?

Check our [advertising feature](./../features/calendar.md) page for infomation about the different types of advertising available.

## What is ZRC-2?

ZRC-2 is a fungible token standard. ZRC-2's can be bought and sold from centralised and decentralised exchanges.

gZIL, XSGD, WZIL are examples of ZRC-2 tokens.

[ZRC-2 implementation can be found here.](https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-2.md)

## What is WZIL?

Native ZIL can be tokenised into a ZRC-2 token in a 1:1 ratio called 'Wrapped Zilliqa' or WZIL. WZIL can be burnt or unwrapped to return native ZIL.

## What is ZRC-6?

A non-fungible token contract which includes royalty payments to the contract royalty address whenever a token is sold by a marketplace which supports royalty payments.

The contract has the ability to hold a base URI that contains an API which when queried for a particular tokenID, will return the associated metatdata for that tokenID.

Non Fungible Ducks and The Soulless Citadel are examples of ZRC-6 tokens.

[ZRC-6 implementation can be found here.](https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-6.md)

## What is ZRC-7?

A JSON metadata standard which should be returned when quering a ZRC-6 NFT.

[ZRC-7 implementation can be found here.](https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-7.md)

## How do I recieve royalties?

A ZRC-6 NFT has the ability to present a sales tax amount and a sales tax recipient.

The owner will be able to call ```SetRoyaltyRecipient``` with a base 16 Zilliqa address of the royalty recipient they want.

Contract owners can also set and update the amount of royalties by calling ```SetRoyaltyFeeBPS``` with the royalty BPS.

Royalties are automatically sent as part of the sale. When zilkroad processes a sale, the royalty tax amount is read from the NFT contract being traded, with the amount of tokens used for the inital order, the royalty can be calculated and then sent to the royalty recipient.

Your profile page will track the total amount of royalties earnt and each royalty transaction.

<p align="center">
  <img width="1000" height="200" src="/img/introduction/royalties_row.jpg">
</p>
