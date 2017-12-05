<template>
<div id="DeviceDetails">
	<h1>Device details</h1>
	<div v-if="deviceDetail">
		<ul>
			<li>NAME: {{deviceDetail.device}}</li>
			<li>TYPE: {{deviceDetail.type}}</li>
			<li v-for="(val, key) in deviceDetail.meta">{{key}}: {{val}}</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
	name: 'deviceDetails',
	data() {
		return {
			deviceID: this.$route.params.deviceID,
			ws: this.$route.meta.ws,
			deviceDetail: null
		}
	},
	created() {
		let vm = this;
		if (vm.ws.readyState === 1) {
			let _deviceDetail = vm.ws.lm.devices.find((d) => {
				if (d.device === vm.deviceID) {
					return d
				}
			});
			vm.deviceDetail = _deviceDetail;
		}
	},
}
</script>

<style scoped>
ul {
	list-style-type: circle;
}
</style>
