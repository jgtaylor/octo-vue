<template>
<div id="ScheduleDetails">
	<h1>Schedule Details</h1>
	<div v-if="scheduleDetail">
		<ul>
			<li>ID: {{scheduleDetail.id}}</li>
			<li>Enabled: {{scheduleDetail.enabled}}</li>
			<li>Duration: {{duration}} hours</li>
			<li>Next Run: {{ nextRun }}</li>
		</ul>
	</div>
</div>
</template>

<script>
import moment from 'moment';
import later from 'later';

export default {
	name: 'scheduleDetails',
	data() {
		return {
			scheduleID: this.$route.params.scheduleID,
			ws: this.$route.meta.ws,
			scheduleDetail: null
		}
	},
	created() {
		let vm = this;
		console.log("Inside ScheduleDetails.vue -> created()")
		if (vm.ws.readyState === 1) {
			let _scheduleDetail = vm.ws.lm.schedules.find((s) => {
				if (s.id === vm.scheduleID) {
					return s
				}
			});
			vm.scheduleDetail = _scheduleDetail;
		}
	},
	computed: {
		duration: function() {
			if (this.scheduleDetail.duration) {
				return moment.duration(this.scheduleDetail.duration).as('hours');
			} else {
				return "Duration not defined."
			}
		},
		nextRun: function() {
			let vm = this;
			console.log(vm.scheduleDetail.definition)
			later.date.localTime();
			let sched = later.schedule(vm.scheduleDetail.definition);
			return moment(sched.next(1)).fromNow();
		}

	}
}
</script>

<style scoped>
ul {
	list-style-type: circle;
}
</style>
