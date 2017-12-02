<template lang="html">
	<div class="container">
		<h1>Devices</h1>
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
	methods: {
		fetchData() {
			let that = this;
			console.log("fetchData() ... WebSocket should follow")
			this.ws.send(JSON.stringify(["client", {
				cmd: "register"
			}]));
			this.ws.addEventListener('message', function(event) {
				let data = JSON.parse(event.data);
				that.devices = data.models;
				console.log(that.devices);

			}, {
				once: true
			});

		}
	},
	created() {
		if (this.ws.readyState === 1) {
			this.fetchData();
		} else {
			this.ws.addEventListener("open", this.fetchData, {
				once: true
			});
		}
	},
	watch: {
		// call again the method if the route changes
		'$route': 'fetchData'
	}
}
</script>

<style lang="css">
</style>
