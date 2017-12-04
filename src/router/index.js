import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Zones from '@/components/Zones'
import Devices from '@/components/Devices'
import Schedules from '@/components/Schedules'
import PidControlers from '@/components/PidControlers'
import DeviceDetails from '@/components/DeviceDetails'
import Aside from '@/components/Aside'

Vue.use( Router )
let ws = new WebSocket( "ws://localhost:2801/" );
ws.addEventListener( 'close', function ( event ) {
	console.log( "WebSocket Closed", event );
} );

export default new Router( {
	routes: [ {
		path: '/',
		name: 'homeShort',
		components: {
			default: Home,
			aside: Aside
		},
		meta: {
			ws: ws
		}
	}, {
		path: '',
		name: 'homeDefault',
		components: {
			default: Home,
			aside: Aside
		},
		meta: {
			ws: ws
		}
	}, {
		path: '/home',
		name: 'homeLong',
		components: {
			default: Home,
			aside: Aside
		},
		meta: {
			ws: ws
		}
	}, {
		path: '/zones',
		name: 'zones',
		components: {
			default: Zones,
			aside: Aside
		},
		meta: {
			ws: ws
		}
	}, {
		path: '/devices',
		name: 'devices',
		components: {
			default: Devices,
			aside: Aside
		},
		meta: {
			ws: ws
		}
	}, {
		path: '/schedules',
		name: 'schedules',
		components: {
			default: Schedules,
			aside: Aside
		},
		meta: {
			ws: ws
		}
	}, {
		path: '/pidcontrolers',
		name: 'pidcontrolers',
		components: {
			default: PidControlers,
			aside: Aside
		},
		meta: {
			ws: ws
		}
	}, {
		path: '/device/:deviceID',
		name: 'deviceDetails',
		components: {
			default: DeviceDetails,
			aside: Aside
		},
		meta: {
			ws: ws
		}
	}, ],
	mode: "history"
} )