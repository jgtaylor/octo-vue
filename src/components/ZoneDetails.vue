<template>
<div id="ZoneDetails">
	<h1>Zone Details</h1>
	<div v-if="zoneDetail">
		<ul>
			<li>NAME: {{zoneDetail.name}}</li>
			<li>TYPE: {{zoneDetail.type}}</li>
			<li>Size: {{zoneDetail.size}}{{zoneDetail.sizeUnit}}</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
	name: 'zoneDetails',
	data() {
		return {
			zoneID: this.$route.params.zoneID,
			ws: this.$route.meta.ws,
			zoneDetail: null
		}
	},
	created() {
		let vm = this;
		if (vm.ws.readyState === 1) {
			let _zoneDetails = vm.ws.lm.zones.find((z) => {
				console.log(`${z.name} ?? ${vm.zoneID}`)
				if (z.name === vm.zoneID) {
					return z
				}
			})
			console.log(_zoneDetails);
			vm.zoneDetail = _zoneDetails;
			console.log(vm.zoneDetail);
		}
	},
}
</script>

<style scoped>
ul {
	list-style-type: circle;
}
</style>
