<template lang="html">
	<div class="container">
			<ul>
				<li v-for="zone in zones"><router-link :to="{ name: 'zoneDetails', params: {zoneID: zone} }">{{ zone }}</router-link></li>
			</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ws: this.$route.meta.ws,
			zones: []
		}
	},
	created() {
		let vm = this;
		// TODO: all this name shit should really be zoneID.
		if ( vm.ws.readyState === 1 ) {
			vm.zones = vm.ws.lm.zones.map(z => z.name );
		}
		vm.ws.addEventListener("lm-updated", function(e) {
			vm.zones = e.detail.zones.map(z => z.name);
			console.log("Devices.vue: created() - event 'lm-updated'");
		});

		vm.ws.addEventListener("zone-add", function(e) {
			vm.zones.push(e.detail.name);
			console.log("added zone %s", e.detail.name);
		});
	}
}
</script>

<style lang="css">
</style>
