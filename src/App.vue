<template>
<div id="app">
	<el-container>
		<el-header>
			<el-tabs type="border-card" @tab-click="handleClick">
				<el-tab-pane label="Home" name="home">Home</el-tab-pane>
				<el-tab-pane label="Zones" name="zones">Zones</el-tab-pane>
				<el-tab-pane label="Devices" name="devices">Devices</el-tab-pane>
				<el-tab-pane label="Schedules" name="schedules">Schedules</el-tab-pane>
				<el-tab-pane label="PIDControlers" name="pidcontrolers">PID Controlers</el-tab-pane>
			</el-tabs>
		</el-header>
		<el-main>
			<router-view/>
		</el-main>
	</el-container>
</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		console.log("Inside App.vue:data()")
		return {
			activeName: 'first'
		}
	},
	methods: {
		handleClick(tab, event) {
			console.log("inside App.vue:handleClick()")
			switch (tab.label) {
				case "Home":
					this.$router.push("/")
					break;
				default:
					this.$router.push("/" + tab.label.toLowerCase());
					break;
			}

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
	width: 640px;
}

.link {
	text-align: center;
}
</style>
