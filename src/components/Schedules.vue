<template lang="html">
	<div class="container">
			<ul>
				<li v-for="schedule in schedules"><router-link :to="{ name: 'scheduleDetails', params: {scheduleID: schedule} }">{{ schedule }}</router-link></li>
			</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ws: this.$route.meta.ws,
			schedules: []
		}
	},
	created() {
		let vm = this;
		// TODO: all this name shit should really be zoneID.
		if ( vm.ws.readyState === 1 ) {
			vm.schedules = vm.ws.lm.schedules.map(s => s.id );
		}
		vm.ws.addEventListener("lm-updated", function(e) {
			vm.schedules = e.detail.schedules.map(s => s.id);
			console.log("Schedules.vue: created() - event 'lm-updated'");
		});

		vm.ws.addEventListener("schedule-add", function(e) {
			vm.schedules.push(e.detail.id);
			console.log("added schedule %s", e.detail.id);
		});
	}
}
</script>

<style lang="css">
</style>
