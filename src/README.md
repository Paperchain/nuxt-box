# nuxt-web3-boilerplate

> Nuxt.js and web3 template project. This boilerplate separates solidity contract development from the web app development.
This means you need to deploy the contracts elsewhere.


## Prequisitors

* Already deployed contract either in local environment or in any other Ethereum Testnets.
* Contract's ABI and address code
* MetaMask account in selected network
* Basic knowledge about Nuxt, Vuex, Web3

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# lint or lintfix
$ npm run lint
$ npm run lintfix
```

## Web3 development flow

1) Replace your contract details in "/contracts/my-contract.js"
2) Implement contract methods in the actions block of "/store/my-contract.js"