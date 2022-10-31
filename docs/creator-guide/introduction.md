---
lang: en-US
title: Creator Guide 101
meta:
  - name: description
    content: How to create an NFT contract
  - name: keywords
    content: Zilkroad Creator Guide how to create NFT Zilliqa
---

## Step 1 - Deploy a ZRC-6 NFT to testnet

1. Navigate to the [Scilla IDE](https://ide.zilliqa.com/#/)
2. Import a Zilpay wallet at the top right, so that the IDE recognises the address you want to deploy from.

![image](/img/developer-guide/import-zilpay.png)

3. Fund your testnet account with some funds via the [testnet faucet](https://dev-wallet.zilliqa.com/faucet?network=testnet)
4. [Review the documentation for the ZRC-6 NFT Contract](https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-6.md)
5. [Create a new scilla file and copy the ZRC-6 contract into the file](https://raw.githubusercontent.com/Zilliqa/ZRC/master/reference/zrc6.scilla) and press 'Deploy'
6. Change the default 'Gas Limit' from 25k to 30k and insert the following required fields

![image](/img/developer-guide/zrc-6-deploy.png)

**initial_contract_owner**

Copy your base16 Zilliqa address starting with **0x**.

**initial_base_uri**

Leave this blank for now, we will cover this in the next section.

**name**

The name of your NFT contract representing the entire digital collection.

**symbol**

The symbol of your NFT contract representing the entire digital collection.

7. A deployed contract will appear in the bottom left of the IDE

![image](/img/developer-guide/deployed-contract.png)

## Step 2 - Metadata introduction

Don't upload your image directly as the image resource - create metadata!

Once we have deployed a ZRC-6 NFT contract to the chain, we will want to start minting tokens!

The digital asset we point to on-chain is expected to be a JSON object confirming to ZRC-7 - Rather than the image itself

On this metadata there is a field where we can insert the digital asset we have under **resource** (see line 3 below).

Whenever users wish to create a digital asset resource, they will need to create an accompanying piece of metadata which describes the resource.

The metadata should be the data returned when querying for a specific token, from here users can fetch any related image assets.

Please read the ZRC-7 metadata specification for more information on rules relating to the data standard and which pattern you should implement.

```json {4}
{
    "name": "Advertising Space",
    "description": "Each token represents a unique advertising space in the city.",
    "resource": "ipfs://QmSjJGa7zXUbixvYJpgkRkaSCYEBtSwgVtfzkoD3QkSsty",
    "resource_mimetype": "image/png",
    "external_url": "https://example.com",
    "external_description": "A generic headline from the project shared between all tokens.",
    "attributes": 
    [ 
      {
        "trait_type": "City", 
        "value": "London"
      }, 
      {
        "trait_type": "Population", 
        "trait_value": "8961989"
      }, 
    ]
}
```

## Step 3a - token_uri

A token_uri is a 1-1 mapping between a particular token and a particular asset. The token_uri can hold the metadata for a token, but this can never be changed once set.

The advantages of using a token_uri is that is relies on less infrastructure to be built around an NFT project.
If your digital assets are immutable and are unlikely to change, then using the Token URI pattern is recommended.

1. Upload the digital asset to some server, IPFS or Arweave and have returned a URL that fetches the asset.
2. Create some ZRC-7 metadata which points **resource** to the digital asset, and upload this to some server, IPFS or Arweave and have returned a URL that fetches the metadata with the asset.
3. Mint a new token with the metadata URL as the **token_uri** and prefix this with `ipfs://<CID>` or `ar://<CID>` or leave it as `https://` for surface web.

![image](/img/developer-guide/mint-call.png)

## Step 3b - base_uri

The advantages of using a base_uri pattern is that the data is not being held on-chain, but instead by some centralised API the developer controls.This means that the developer has control over what data is presented by the API.

If your digital assets are mutable and are likely to change, then using the base_uri pattern is recommended.
Account for the case where the tokens ahead of the currently minted token ID are not available to fetch.
Read from the contract state to determine which ID to show up to.

1. Upload the digital asset to some server, IPFS or Arweave and have returned a URL that fetches the asset.
2. Create some ZRC-7 metadata which points to the digital asset, and upload this to some server, IPFS or Arweave and have returned a URL that fetches the metadata with the asset.
3. Create an API which when requested for a particular Token ID, returns the ZRC-7 metadata related for that token ID.

![image](/img/developer-guide/baseuri-call.png)

4. When Minting omit the token URI.

![image](/img/developer-guide/mint-call.png)

## Priority

```token_uri``` has priority over ```baseuri/token_id``` - therefore if both are present for a single ZRC-6 NFT then ```token_uri``` is taken as the resource asset.

## Next steps

Now the contract is onchain, depending if you chose 3a or 3b, the two following guides show you how to present the metadata either [immutably](/creator-guide/token-uri) or [mutable](/creator-guide/base-uri)