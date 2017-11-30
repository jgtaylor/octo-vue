<template>
<div class="devices">
	<h1>Fucking Testing!</h1>
	<h3>Devices</h3>
	<ul>
		<li v-for="d in devices">
			<router-link :to="{ name: 'DeviceDetails', params: { device: d } }">{{d}}</router-link>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			devices: [],
			ws: this.$route.meta.ws
		}
	},
	methods: {
		fetchData() {
			let that = this;
			console.log("fetchData() ... WebSocket should follow")
			that.ws.send( JSON.stringify(["client", {cmd: "register"}]) );
			that.ws.addEventListener('message', function(event) {
				let data = JSON.parse(event.data);
				console.log(data.models);
				console.log(that.devices)
				that.devices = data.models;
			}, { once: true });

		}
	},
	created() {
		this.fetchData();
	},
	watch: {
    	// call again the method if the route changes
    	'$route': 'fetchData'
  	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}



a {
	color: #42b983;
}
</style>
