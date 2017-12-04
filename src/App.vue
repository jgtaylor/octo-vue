<template>
<div id="app">
	<el-container class="main">
		<el-header>
			<el-menu :default-active="activeIndex" mode="horizontal" @select="handleClick" class="nav" :router="true" active-text-color="#F9B9BD" text-color="#A6B0C2" background-color="#314A76">
				<el-menu-item index="/" route="/">Home</el-menu-item>
				<el-menu-item index="/zones" route="/zones">Zones</el-menu-item>
				<el-menu-item index="/devices" route="/devices">Devices</el-menu-item>
				<el-menu-item index="/schedules" route="/schedules">Schedules</el-menu-item>
				<el-menu-item index="/pidcontrolers" route="/PidControlers">PidControllers</el-menu-item>
			</el-menu>
		</el-header>
		<el-main>
			<el-container>
				<el-main class="panels-o-love">
					<router-view />
				</el-main>
				<el-aside class="aside">
					<router-view name="aside" />
				</el-aside>
			</el-container>
		</el-main>
	</el-container>
</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			activeIndex: '/'
		}
	},
	methods: {
		handleClick(index, indexPath, component) {
			this.$router.push({
				path: index
			})
			this.activeIndex = index
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
}

.main {
	border: 2px double #82BF78;
}
.aside {
	padding: 13px;
}
.panels-o-love {
	background-color: #419334;
	color: #FFF1D7;
}

a:active,a:hover,a:visited,a {
	color: #FFF1D7;
	text-decoration:  none;
	font-weight: bold;
}


.nav {
	font-weight: bold;
	font-size: 2em;
}
</style>
