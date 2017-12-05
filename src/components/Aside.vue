<template>
<div class="aside">
	<div v-html="connMsg"></div>
	<p><i class="el-icon-info"></i> Here we could have realtime messages, etc. This is Aside.vue.</p>
	<table>
		<tr>
			<td class="table-title">Zones</td><td class="table-number" >{{zones}}</td>
		</tr>
		<tr>
			<td class="table-title">Devices</td><td class="table-number" >{{devices}}</td>
		</tr>
		<tr>
			<td class="table-title">Schedules</td><td class="table-number" >{{schedules}}</td>
		</tr>
		<tr>
			<td class="table-title">Pid Controllers</td><td class="table-number" >{{pidCtlrs}}</td>
		</tr>
	</table>
</div>
</template>

<script>
export default {
	data() {
		return {
			ws: this.$route.meta.ws,
			connected: this.$route.meta.ws.readyState,
			connMsg: '',
			lm: this.$route.meta.ws.lm,
			zones: 0,
			devices: 0,
			schedules: 0,
			pidCtlrs: 0
		}
	},
	created() {
		var vm = this;
		vm.ws.addEventListener("open", function() {
			vm.connMsg = `<i class="el-icon-success"> </i> WebSocket is connected.`
		})
		vm.ws.addEventListener("close", function() {
			vm.connMsg = `<i class="el-icon-warning"> </i> WebSocket is closed.`
		})
		vm.ws.addEventListener("error", function() {
			vm.connMsg = `<i class="el-icon-error"> </i> WebSocket has an error.`
		})
		vm.ws.addEventListener("lm-updated", function(e) {
			console.log(e.detail);
			vm.zones = e.detail.zones.length;
			vm.devices = e.detail.devices.length;
			vm.schedules = e.detail.schedules.length;
			vm.pidCtlrs = e.detail.pidCtlrs.length;
		})
	}
}
</script>

<style lang="css">
.table-number {
	text-align: right;
	width: 30px;
	font-size: .8em;
	font-weight: bold;
}

.table-title {
	text-align: left;
	font-size: .8em;
	font-weight: bold;
}

.WS-error {
	color: red;
}

.WS-error {
	color: green;
}
</style>
