---
lang: en-US
title: Ecosystem integrations
meta:
  - name: description
    content: How do I integrate my Dapp with Zilkroad functionality
  - name: keywords
    content: Zilkroad integrations
---

## Ecosystem integrations

Ecosystem partners may interact with Zilkroad using Zilliqa-js.

Please familiarise yourself with the two examples for [writing state to chain](https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/blob/master/node/callContract.js) and [retrieving state from chain](https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/blob/master/node/queryState.js).

The below examples follow on from this inital knowledge.

## Contract addresses

| Contract Name    | Network    | Contract Address                           |
|------------------|------------|--------------------------------------------|
| Marketplace      | Mainnet    |                                            |
| NFT Escrow       | Mainnet    |                                            |
| Launchpad Escrow | Mainnet    |                                            |
| Marketplace      | Testnet    | 0xB4FA69997f7560fe48F375b03F73B8774cB3BF5A |
| NFT Escrow       | Testnet    | 0x8e7358f356fda73d450aed70dab7a93708b75650 |
| Launchpad Escrow | Testnet    | 0x3dad9ad08d87da1a2cc9a21578f5abb7023164fc |

## Code examples

### Listing an NFT

```js
const callTx = await deployedContract.callWithoutConfirm
(
    'UserList',
    [
        {
            vname: 'nonfungible',
            type: 'ByStr20',
            value: nftContract
        },
        {
            vname: 'token_id',
            type: 'Uint256',
            value: tokenId
        },
        {
            vname: 'fungible',
            type: 'ByStr20',
            value: fungible
        },
        {
            vname: 'sell_price',
            type: 'Uint128',
            value: sellPrice
        }
    ],
    {
        version: VERSION,
        amount: new BN(0),
        gasPrice: myGasPrice,
        gasLimit: Long.fromNumber(8000),
    },
    false,
);
```

### Return an NFT

```js
const callTx = await deployedContract.callWithoutConfirm
(
    'UserReturn',
    [
        {
            vname: 'oid',
            type: 'Uint256',
            value: orderId
        }
    ],
    {
        version: VERSION,
        amount: new BN(0),
        gasPrice: myGasPrice,
        gasLimit: Long.fromNumber(8000),
    },
    false,
);
```

### Buy an NFT

```js
const callTx = await deployedContract.callWithoutConfirm
(
    'UserBuy',
    [
      {
        vname: 'oid',
        type: 'Uint256',
        value: orderId
      }
    ],
    {
        version: VERSION,
        amount: new BN(0),
        gasPrice: myGasPrice,
        gasLimit: Long.fromNumber(8000),
    },
    false,
);
```

### Edit an existing order

```js
const callTx = await deployedContract.callWithoutConfirm
(
    'UserEditListingPrice',
    [
      {
        vname: 'oid',
        type: 'Uint256',
        value: orderId
      },
      {
        vname: 'new_fungible',
        type: 'ByStr20',
        value: newFungile
      },
      {
        vname: 'new_sell_price',
        type: 'Uint128',
        value: fungibleSellPrice
      },
    ],
    {
        version: VERSION,
        amount: new BN(0),
        gasPrice: myGasPrice,
        gasLimit: Long.fromNumber(8000),
    },
    false,
);
```

### Fetch all orderIDs from a collection which a user holds

You may want to interact with zilkroad from your own application. Being able to buy, edit or delist requires you knowing the orderID you was given when you listed.

The below query searches the zilkroad listing map where orders have been placed by a users address and returns this orderID as well as the details of the listing.

```js
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');
 
async function FetchState() 
{
    const zilkroadMarketplace = 'a4463b8d05eecd52249521e3d33447b0dceb17fb'
    const mapKey = 'listing_map'
    const searchValue = '0xb718e21c50ac5b26c82d22008bf19a3cd2c36583'

    const stateFetch = await zilliqa.blockchain.getSmartContractSubState(
        zilkroadMarketplace,
        mapKey
    );

    for(var order in stateFetch.result.listing_map)
    {
        //console.log(JSON.stringify(stateFetch.result.listing_map[index], null, 2))
        const nftContract = stateFetch.result.listing_map[order].arguments[0].arguments[0]
        const tokenID = stateFetch.result.listing_map[order].arguments[0].arguments[1]
        const nftLister = stateFetch.result.listing_map[order].arguments[1].arguments[0]
        const fungibleContract = stateFetch.result.listing_map[order].arguments[1].arguments[1]
        const fungibleAmount = stateFetch.result.listing_map[order].arguments[1].arguments[2]

        if(nftLister == searchValue)
        {
            console.log(`${searchValue} owns orderID ${order}`)
        }
    }
}
FetchState()
```

### Fetch all previous sales history for a user

Coming soon...
