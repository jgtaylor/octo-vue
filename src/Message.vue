<template>
	<div>
		<h1>{{ message }}</h1>
		<app-input :msg="message" @changeMessage="message = $event"></app-input>
	</div>
</template>
<script>
	import Input from "./Input.vue"

	export default {
		data() {
			return {
				message: "Welcome to the OctoBox!"
			}
		},
		components: {
			"app-input": Input
		}
	}
</script>
