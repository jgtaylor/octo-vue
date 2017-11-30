import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import DeviceDetails from '@/components/DeviceDetails'

Vue.use( Router )
let ws = new WebSocket( "ws://localhost:2801/" );
ws.addEventListener( 'close', function ( event ) {
	console.log( "WebSocket Closed", event );
} );
export default new Router( {
	routes: [ {
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/test',
			name: 'Test',
			component: Test,
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
		}
	]
} )