<template>
<div>
	<h2>OctoBox Management</h2>
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/PEO-gentleman_octopus.svg/2000px-PEO-gentleman_octopus.svg.png" width="100px" class="copy-img">
	<p class="copy">Welcome to the OctoBox Project. Here we'll configure
		everything your box needs to manage your garden, your pool, your aquarium,
	or anything else you need to manage.</p>
	<p>Here's a quick overview of what we'll do:
<ol>
	<li>Define Zones: These can be any kind of grouping you'd like. For gardens,
		you might setup an Herbal Zone &amp; a Vegitable Zone.</li>
	<li>Associate Devices with Zones: Your devices should appear here auto:magically.
	Once they're available, you tell OctoBox in which Zone your device is operating.
	This can potentially get confusing, so make sure you've got the right one in
	the right place.</li>
	<li>Finally, you associate a Schedule or a PID Controller, or both, for your
		Zones, or even for an individual device.</li>

	Eventually, you'll be able to monitor your automated things, add new things
	and capabilities easily, integrating them into your already running systems.
	The possiblilities are truely endless!
</ol>
That's it! As easy as 1 - 2 - 3!
	</p>
</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			ws: this.$route.meta.ws
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*a {
	color: #42b983;
	font-weight: bold;
}*/
.copy-img {
	float: left;
	margin: 0px 30px 30px 0px;

}
</style>
