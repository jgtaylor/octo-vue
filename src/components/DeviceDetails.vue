<template>
	<div id="DeviceDetails">
  		<h1>Device details</h1>
  		<div v-if="device">
			<ul>
				<li>NAME: {{device.device}}</li>
				<li>TYPE: {{device.type}}</li>
				<li v-if="device.meta.deviceName">META: {{device.meta.deviceName}}</li>
				<li v-if="device.meta.name">META: {{device.meta.name}}</li>
				<li v-if="device.meta.metric">META: {{device.meta.metric}}</li>
				<li v-if="device.meta.unit">META: {{device.meta.unit}}</li>
				<li v-if="device.meta.color">META: {{device.meta.color}}</li>
				<li v-if="device.meta.usage">META: {{device.meta.usage}}</li>
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
			let id = this.$route.params.device
			let ws = this.ws;
			let that = this;
			ws.send(JSON.stringify(["client", {
				cmd: "get",
				obj: id
			}]))
			ws.addEventListener("message", function(e) {
				if (e.data.message) {
					console.log(e.data.message);
					return false;
				}
				let packet = JSON.parse(e.data);
				console.log(packet);
				// packet[0] === "detail", packet[1] === { device: "", type: "", meta: {} }
				that.device = JSON.parse(packet[1]);
				console.log(that.device);
			}, {
				once: true
			});
		}
	},
	created() {
		this.getDeviceDetails()
		// this.ws.addEventListener('message', function(event) {
		// 	let data = JSON.parse(event.data);
		// 	console.log(data.models);
		// 	console.log(this.devices)
		// 	this.device = data.models;
		// }, this);
	},
	watch: {
    	// call again the method if the route changes
    	'$route': 'getDeviceDetails'
  	},
}
</script>

<style lang="css">
</style>
