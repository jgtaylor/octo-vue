<template>
<div id="app">
	<router-link :to="{ name: 'zones', params: {} }"></router-link>
	<router-link :to="{ name: 'devices', params: {} }"></router-link>
	<router-link :to="{ name: 'schedules', params: {} }"></router-link>
	<router-link :to="{ name: 'pidcontrollers', params: {} }"></router-link>
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
