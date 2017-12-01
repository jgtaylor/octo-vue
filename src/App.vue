<template>
<div id="app">
	<router-link :to="{ name: 'zones', params: {} }">Zones</router-link>
	<router-link :to="{ name: 'devices', params: {} }">Devices</router-link>
	<router-link :to="{ name: 'schedules', params: {} }">Schedules</router-link>
	<router-link :to="{ name: 'pidcontrollers', params: {} }">PID Controlers</router-link>
	<router-view/>
</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
