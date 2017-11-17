<template>
	<div class="">
		<input type="text" v-model="message" @input="changeMessage">
		<p>{{ message }}</p>
	</div>
</template>
<script>
	export default {
		props: [ "msg"],
		data() {
			return {
				message: ""
			}
		},
		methods: {
			changeMessage(event) {
				this.message = event.target.value
				this.$emit("changeMessage", this.message)
			}
		}
	}
</script>
