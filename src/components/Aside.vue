<template>
<div class="aside">
	<div v-html="connMsg"></div>
	<p><i class="el-icon-info"></i> Here we could have realtime messages, etc. This is Aside.vue.</p>
</div>
</template>

<script>
export default {
	data() {
		return {
			ws: this.$route.meta.ws,
			connected: this.$route.meta.ws.readyState,
			connMsg: ''
		}
	},
	created() {
		var vm = this;
		vm.ws.addEventListener("open", function() {
			vm.connMsg = `<i class="el-icon-success"> </i> WebSocket is connected.`
		})
		vm.ws.addEventListener("close", function() {
			vm.connMsg = `<i class="el-icon-warning"> </i> WebSocket is closed.`
		})
		vm.ws.addEventListener("error", function() {
			vm.connMsg = `<i class="el-icon-error"> </i> WebSocket has an error.`
		})
	}
}
</script>

<style lang="css">

.WS-error {
	color: red;
}

.WS-error {
	color: green;
}
</style>
