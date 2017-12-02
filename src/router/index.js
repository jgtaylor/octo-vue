import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Zones from '@/components/Zones'
import Devices from '@/components/Devices'
import Schedules from '@/components/Schedules'
import PidControlers from '@/components/PidControlers'
import DeviceDetails from '@/components/DeviceDetails'

Vue.use( Router )
let ws = new WebSocket( "ws://localhost:2801/" );
ws.addEventListener( 'close', function ( event ) {
	console.log( "WebSocket Closed", event );
} );

export default new Router( {
	routes: [ {
		path: '/',
		name: 'homeShort',
		component: Home,
		meta: {
			ws: ws
		}
	}, {
		path: '',
		name: 'homeDefault',
		component: Home,
		meta: {
			ws: ws
		}
	}, {
		path: '/home',
		name: 'homeLong',
		component: Home,
		meta: {
			ws: ws
		}
	}, {
		path: '/zones',
		name: 'zones',
		component: Zones,
		meta: {
			ws: ws
		}
	}, {
		path: '/devices',
		name: 'devices',
		component: Devices,
		meta: {
			ws: ws
		}
	}, {
		path: '/schedules',
		name: 'schedules',
		component: Schedules,
		meta: {
			ws: ws
		}
	}, {
		path: '/pidcontrolers',
		name: 'pidcontrolers',
		component: PidControlers,
		meta: {
			ws: ws
		}
	}, {
		path: '/device/:deviceID',
		name: 'deviceDetails',
		component: DeviceDetails,
		meta: {
			ws: ws
		}
	}, ],
	mode: "history"
} )