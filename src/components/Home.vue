<template>
<div class="home">
	<h2>OctoBox Management</h2>
	<img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Twemoji2_1f419.svg" width="150px" class="copy-img">
	<p class="copy">Welcome to the OctoBox Project. Here we'll configure
		everything your box needs to manage your garden, your pool, your aquarium,
	or anything else you need to manage.</p>
	<p>Here's a quick overview of what we'll do:
<ol>
	<li>Define Zones: These can be any kind of grouping you'd like. For gardens,
		you might setup an Herbal Zone &amp; a Vegitable Zone.</li>
	<li>Associate Devices with Zones: Your devices should appear here auto:magically.
	Once they're available, you tell OctoBox in which Zone your device is operating.
	This can potentially get confusing, so make sure you've got the right one in the right place.</li>
	<li>Finally, you associate a Schedule or a PID Controller, or both, for your Zones.</li>
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
<style>
h1,
h2 {
	font-weight: normal;
	text-align: center;
}

a {
	color: #42b983;
	font-weight: bold;
}
p {
	text-align: left;
}
.copy-img {
	float: left;
	margin: 30px;
}
</style>
