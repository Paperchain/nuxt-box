# nuxt-box
Truffle Box for Nuxt.js development.

## Installation
- Install truffle: `npm i -g truffle`
- Clone the repository: `git clone https://github.com/Paperchain/nuxt-box`
- Install package depencencies: `npm i`
- Install [Metamask browser extension](https://metamask.io/)

## Running the test application

    If you have MetaMask set for your browser, configure a 
    Custom RPC with address: http://localhost:9545 from Metamask Networks tab.
    
1) Open terminal and run the development server: `truffle develop`
2) deploy the contracts to local blockhain: `migrate --reset`
3) Copy token address from the terminal:

```
EIP20: 0x345ca3e014aaf5dca488057592ee47305d9b3e10
```

4) Paste the token address to **src/eip20/eip20.js** where it says:

```
const tokenAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10'
// insert deployed EIP20 token address here

```

5) Open a new terminal tab and run the webapp: `npm run dev`

6) Connect local-rpc account with MetaMask. Follow [this answer](https://ethereum.stackexchange.com/questions/30593/how-can-i-import-the-accounts-from-truffle-develop-into-metamask) on Ethereum StackExchange.
This account will have tokens and ether for transactions.

## Credits

For example purposes this boilerplate uses [EIP20 token contracts made by ConsenSys](https://github.com/ConsenSys/Tokens/tree/master/contracts/eip20).