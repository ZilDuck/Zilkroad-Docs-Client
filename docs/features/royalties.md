---
lang: en-US
title: Royalties
meta:
  - name: description
    content: How to earn royalties on Zilkroad and why you should care as a creator!
  - name: keywords
    content: Zilkroad Royalties Earning Tokens Zilliqa
---

## Royalties

### What are royalties?

When an NFT is deployed, it has a royalty amount expressed in basis points (bps) and a royalty recipient (defaults to the owner of the contract unless edited explicitly).

```text
1bps = 0.01%
10bps = 0.1%
100bps = 1%
1000bps = 10%
10000bps = 100%
```

When a sale occurs between a buyer and seller which involves an NFT with royalty, the marketplace is the entity responsible with ensuring the royalty recipient is being rewarded with the correct royalty amount.

### How are royalties calculated?

The royalty fee is calculated from the amount of funds being traded.

If an NFT was listed for 100 WZIL and the royalty was 1000 bps (10%)

(100 WZIL - 10% = 10 WZIL) would be sent to the royalty recipient automatically as part of the sale, the remaining funds (90 WZIL) would be sent to the lister of the item.

The royalty amount for each contract can be found on the collection page. The royalty is also shown on the buying modal before purchasing.

### How do I get royalties?

If you are the owner of an NFT contract which is actively being traded then you will recieve royalties in tokens which users are trading immediately once the sale transaction confirms.

Perhaps it's time to [get creating?](../creator-guide/creator-introduction.md)

### Can I change a royalty once a contract is deployed?

Yes. There is a function on the NFT which can be called by the current owner to change how much basis points should be sent to the royalty recipient.
