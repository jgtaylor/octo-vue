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
			this.ws.addEventListener("message", function(e) {
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

<style scoped>
ul {
	list-style-type: circle;
}
</style>
