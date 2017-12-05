<template lang="html">
	<div class="container">
			<ul>
				<li v-for="device in devices"><router-link :to="{ name: 'deviceDetails', params: {deviceID: device} }">{{ device }}</router-link></li>
			</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ws: this.$route.meta.ws,
			devices: []
		}
	},
	created() {
		let vm = this;
		if ( vm.ws.readyState === 1 ) {
			vm.devices = vm.ws.lm.devices.map(d => d.device );
		}
		vm.ws.addEventListener("lm-updated", function(e) {
			vm.devices = e.detail.devices.map(d => d.device);
			console.log("Devices.vue: created() - event 'lm-updated'");
		});

		vm.ws.addEventListener("device-add", function(e) {
			vm.devices.push(e.detail.device);
			console.log("added device %s", e.detail.device);
		});
	}
}
</script>

<style scoped>
ul {
	list-style-type: circle;
}
</style>
