---
title: Frequently Asked Questions
meta:
  - name: description
    content: Check our frequently asked questions for Zilkroad
  - name: keywords
    content: Zilkroad FAQ Zilliqa
---

## What is Zilkroad?

Zilkroad is an NFT marketplace built on the Zilliqa blockchain. Decentralised and permissionless - we allow anyone to buy or sell Zilliqa-based NFTs through our bespoke UI and smart contracts.

Zilkroad aims to help promote artists and creators by providing them with a trustless marketplace to share, sell and aquire royalty through sales of their art. In the future we will develop functionality to deploy, mint and manage ZRC-6 contracts.

Zilkroad has recieved no investments made to it by any entity. Zilkroad was created by the Duck team through their sales and royalty - to benefit the whole ecosystem rather than just one project. The project from inital analysis to MVP release has taken just over 1 year.

## Secondary Sales

When it comes to selling NFTs you already own, once you've placed an order; it is moved and stored in the marketplace custodial contract.

When someone buys your NFT, the marketplace transfers the correct amount of funds to both the lister and royalty recipient, and releases the NFT from escrow to the buyer. At this stage, the sale is marked as complete in the smart contract.

You can at any point cancel the listing and get back your NFT, providing the transaction hasn't been marked as sold.

Equally, you can also edit and change the token or amount before the listing is sold, without having to delist and relist your NFT.

The statistics of the buyer, seller, royalty recipient and collection are all updated to reflect this sale, so check your profile page's activity status to see historical activity for your listings.

## Primary Sales / Launchpad

Primary sales allows NFT projects the ability to directly mint initial sales through Zilkroad.

Users have the ability to buy directly from the Zilkroad managed sales proxy and receive the NFT directly without leaving the site!

Creators have the ability to feature and sell their project directly through Zilkroad without needing to setup a website.

Read more about [Primary Sales / Launchpad](../features/primary-sales-launchpad.md).

## How do I trade with ZIL rather than tokens?

Zilkroad only supports ZRC-2 to be traded on the platform.

However, native ZIL can be tokenised as a ZRC-2 token in a 1:1 ratio called 'Wrapped Zilliqa' or WZIL. WZIL can be unwrapped back into native ZIL.

If you want to sell in ZIL, then you need to accept WZIL as a payment and then unwrap the funds once your NFT is sold.

If you want to buy in ZIL, then you need to wrap some ZIL to WZIL before you submit a trade.

Zilkroad suggests trading in WZIL as there is more liquidity from potential buyers.

<p align="center">
  <img src="/img/introduction/wzil_wrapper.png">
</p>

You can wrap ZIL into WZIL and unwrap WZIL into ZIL via the wrapper interface.

## How do I know if my NFT has sold?

On your profile page, there is an accounts historical activity which details the recent activity for your account.

The different types of activity rows that are tracked are:

* When you list a token for sale
* When you buy a token that's for sale
* When you edit a tokens price that you've previously listed
* When you sell a token
* When you delisted a token
* When you recieve royalties from a collection you own
* When the admin delists your token for upgrading smart contract purposes

<p align="center">
  <img src="/img/introduction/sold_row.png">
</p>

## Can I get my NFT/funds back after buying/selling?

No, all transactions are immutable, isolated and final. Zilkroad has no control over funds or custody of NFT's pre, during or post transaction.

NFT's can be delisted prior to sale if it has not sold.

## How do I get started on Zilkroad?

If this is your first time experiencing web3 and NFT's, welcome! Please take a moment to read up on good security practices for you and your new wallet, else risk all the funds on it! Beware.

First, you have to create a Zilliqa wallet, via ZilPay. Download the wallet extensions for your browser (and keep your secret phrase safe and secure, never share this with anyone!)

Buy ZIL on an exchange like Binance, Coinbase or FTX and send it to your wallet's public address. Consider sending a small amount first to ensure the funds arrive.

Once you've topped up your wallet with funds, connect your wallet to Zilkroad by clicking the 'Connect Wallet' button in the upper right corner, you're then ready to start trading on Zilkroad.

## Is there a listing fee?

There is no listing fee.

## Is there a fee taken on sales?

For a period when Zilkroad is launched, the fee taken will be 0%.

We plan to increase this in the future.

## Is there a minimum listing amount for an item?

The minimum amount of fungible tokens that can be processed for a sales is 10 units of a token. This is because this is the amount of units required to calculate royalty correctly.

ZIL and WZIL have 12 decimals, so 10 units would be equal to `0.000000000010`.

Duck has 2 decimals, so 10 uints would be equal to `0.10`

See [currently accepted zrc-2's](/features/fungible-tokens.html#currently-accepted-zrc-2) for more infomation.

## What fees are included in the price of a listed NFT?

There is a royalty fee which is a percentage amount set by the creator.

Zilkroad has **no** control over how this fee is set and we respect the royalty amount which the creator has set. Zilkroad sends the a royalty percentage to the specified royalty recipient, even if this was 100%, it would be respected.

The higher the royalty, the less a seller will get on final purchase and the less likely they are to make a profit and the less volume your project will overall likely have.

If you are a **creator or developer** set a sensible royalty between 0-15%. Do not change this without your communities consensus.

If you are a **buyer or seller** beware of the projects ability to change the royalty. At sale time, you will have the correct amount of royalty displayed to you.

## How do I know how much royalty I will pay?

When selling, buying or editing the price of an NFT, the current royalty percentage is read and from the token amount input, the total royalties can be determined ahead of time.

<p align="center">
  <img src="/img/introduction/royalties_modal.png">
</p>

See the [royalties page](../features/royalties.md) for more details about royalties.

## What are the gas fees like on the Zilliqa network?

The transaction fees on Zilliqa is minimal. However, we encourage users to have at least 10 ZIL in their wallet to ensure that their transaction can be processed.

| Action          | Estimated cost |
|-----------------|----------------|
| List            | 5 ZIL          |
| Buy             | 8 ZIL          |
| Delist          | 4 ZIL          |
| Change Price    | 4 ZIL          |
| Recieve Royalty | FREE           |

Gas is required to perform your action on the blockchain. If a transaction fails it will consume gas, but no action is taken.

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

If you listed an NFT it will show up in multiple places.
  * The collections page
  * A listing on your profile page
  * Recently listed

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

Native ZIL can be tokenised into a ZRC-2 token in a 1:1 ratio called 'Wrapped Zilliqa' or WZIL. WZIL can be burnt or unwrapped to return native ZIL. A WZIL/ZIL wrapper can be found after logging in.

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

Royalties are automatically sent as part of the sale. When Zilkroad processes a sale, the royalty tax amount is read from the NFT contract being traded, with the amount of tokens used for the inital order, the royalty can be calculated and then sent to the royalty recipient.

Your profile page will track the total amount of royalties earnt and each royalty transaction.

<p align="center">
  <img src="/img/introduction/royalties_row.png">
</p>

### I made a ZRC-6 but instead of putting the metadata as the URI, I put the image - help!

You will need to migrate all of your tokens to a new contract which exposes metadata in the URI.

Zilkroad takes a hard stance on not developing client specific fixes for broken contracts - one of the reasons that Zilkroad allows any newly minted token to be sold is because we're able to read this metadata out in a standardised way, not conforming to this standard will mean that your collection potentially won't render correctly.

There are two ways of migrating tokens, either from ZRC-1 or ZRC-6 to a new ZRC-6 contract.

The first way is you just redeploy and remint all of your holders a new token - but this comes with the tradeoff that you have two tokens in circulation at any one time.

The second way is to create an escrow which you mint all of your new correct tokens to and then allow users to burn the old token_id in exchange for the new. See this article in the Scilla Cookbook about [migration contracts.](https://scilla-cookbook.org/tutorials/scilla-tutorials/nft-collection/other-contracts)