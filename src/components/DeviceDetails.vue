<template>
<div id="DeviceDetails">
	<h1>Device details</h1>
	<div v-if="device">
		<ul>
			<li>NAME: {{device.device}}</li>
			<li>TYPE: {{device.type}}</li>
			<li v-for="(val, key) in device.meta">{{key}}: {{val}}</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
	name: 'DeviceDetails',
	data() {
		return {
			device: null,
			ws: this.$route.meta.ws
		}
	},
	methods: {
		getDeviceDetails() {
			let id = this.$route.params.deviceID
			let that = this;
			console.log(this.ws);
			this.ws.send(JSON.stringify(["client", {
				cmd: "get",
				obj: id
			}]))
		}
	},
	created() {
		let vm = this;
		this.ws.addEventListener('device-detail', function(e) {
			vm.device = e.detail;
		})
		this.getDeviceDetails()
	},
	watch: {
		// call again the method if the route changes
		'$route': 'getDeviceDetails'
	},
}
</script>

<style scoped>
ul {
	list-style-type: circle;
}
</style>
