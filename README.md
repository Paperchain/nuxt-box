# nuxt-box
Truffle Box for Nuxt.js development.

## Installation
- Install truffle: `npm i -g truffle`
- Clone the repository: `git clone https://github.com/Paperchain/nuxt-box`
- Install package depencencies: `npm i`

## Running the test application

    If you have MetaMask set for your browser, configure a 
    Custom RPC with address: http://localhost9545 from Metamask Networks tab.
    
1) Open terminal and run the development server: `truffle develop`
2) deploy the contracts to local blockhain: `migrate --reset`
3) Copy token address from the terminal:
```
EIP20: 0x345ca3e014aaf5dca488057592ee47305d9b3e10
```
4) Paste the token address to **src/eip20.js** where it says:

```
const eip20 = new web3.eth.Contract(
	EIP20.abi,
	'insert-token-address-here'
)
```

5) Open a new terminal tab and run the webapp: `npm run dev`
