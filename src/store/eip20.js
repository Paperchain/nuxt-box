import web3 from '~/plugins/web3'
import EIP20 from '../../build/contracts/EIP20'

const eip20 = new web3.eth.Contract(EIP20.abi, 'insert-token-address-here')

let account
web3.eth.getAccounts().then(res => {
	account = res[0]
})

export const state = () => ({})

export const mutations = {}

export const actions = {
	getName() {
		return eip20.methods.name().call({ from: account })
	}
}

export const getters = {}
