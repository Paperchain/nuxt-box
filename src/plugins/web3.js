import Web3 from 'web3'

const instance = new Web3(Web3.givenProvider || 'http://localhost:9545')

export default instance
