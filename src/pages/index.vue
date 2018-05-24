<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-web3-boilerplate
      </h1>
      <h2 class="subtitle">
        Nuxt.js and web3 template project
      </h2>
      <div class="calls">
        <button @click="getTokenName">Get Token Name</button>
        <div>
          <span>{{ tokenName }}</span>
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
			tokenName: ''
		}
	},
	methods: {
		async getTokenName() {
			this.tokenName = await this.$store.dispatch('eip20/getName')
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

.links {
	padding-top: 15px;
}
</style>
