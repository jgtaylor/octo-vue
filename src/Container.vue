<template>
	<div class="">
		<app-devices></app-devices>
		<app-zones></app-zones>
		<app-schedules></app-schedules>
	</div>
</template>

<script>
	import Devices from './Devices.vue'
	import Zones from './Zones.vue'
	import Schedules from './Schedules.vue'

	export default {
		data() {
			return {

			}
		}
		components: {
			'app-devices': Devices,
			'app-zones': Zones,
			'app-schedules': Schedules
		}
	}
</script>
<style>

</style>
