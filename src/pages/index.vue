<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-box
      </h1>
      <h2 class="subtitle">
        Truffle box for Nuxt.js development
      </h2>
      <h3 class="paragraph-title">Get Token Name</h3>
      <div class="row">
        <div>
          <button @click="getTokenName">Get Name</button>
          <span style="margin-left: 10px">{{ tokenName }}</span>
        </div>
      </div>
      <div>
        <h3 class="paragraph-title">Transfer tokens</h3>
        <div class="row">
          Recipent Address: <input v-model="recipentAddress" title="Recipent">
        </div>
        <div class="row">
          Amount: <input v-model="amount" title="Amount">
        </div>
        <div class="row">
          <button @click="transfer">Send</button>
        </div>
        <div class="receipt-box">
          Receipt:
          <span style="color:green">{{ transferReceipt }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
	components: {
		AppLogo
	},
	data() {
		return {
			tokenName: '',
			recipentAddress: '',
			transferReceipt: '',
			amount: 0
		}
	},
	methods: {
		async getTokenName() {
			this.tokenName = await this.$store.dispatch('eip20/getName')
		},
		async transfer() {
			this.transferReceipt = await this.$store.dispatch('eip20/transfer', {
				to: this.recipentAddress,
				value: this.amount
			})
		}
	}
}
</script>

<style>
.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.paragraph-title {
	font-weight: 300;
	font-size: 20px;
	color: #35495e;
	word-spacing: 5px;
	padding: 15px 0;
}

.receipt-box {
	padding-top: 15px;
	width: 900px;
	word-break: break-all;
}

.row {
	padding: 10px;
}
</style>
