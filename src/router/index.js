import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DeviceDetails from '@/components/DeviceDetails'

Vue.use( Router )
let ws = new WebSocket( "ws://localhost:2801/" );
ws.addEventListener( 'close', function ( event ) {
	console.log( "WebSocket Closed", event );
} );

export default new Router( {
	routes: [ {
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			ws: ws
		}
	}, {
		path: '/device/:device',
		name: 'DeviceDetails',
		component: DeviceDetails,
		meta: {
			ws: ws
		}
	} ]
} )