<template>
<div id="app">
	<el-tabs type="border-card" @tab-click="handleClick">
		<el-tab-pane label="Home">Home</el-tab-pane>
		<el-tab-pane label="Zones">Zones</el-tab-pane>
	<el-tab-pane label="Devices">Devices</el-tab-pane>
	<el-tab-pane label="Schedules">Schedules</el-tab-pane>
	<el-tab-pane label="PIDControlers">PID Controlers</el-tab-pane>
	</el-tabs>
	<router-view/>
</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			activeName: 'first'
		}
	},
	methods: {
    	handleClick(tab, event) {
			switch (tab.label) {
				case "home":
					tab.label = "";
					break;
				default:
					break;
			}
			this.$router.push("/"+tab.label.toLowerCase())
			console.log(event);
    	}
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 30px;
}

.link {
	text-align: center;
}
</style>
