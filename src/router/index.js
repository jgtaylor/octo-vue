import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Zones from '@/components/Zones'
import Devices from '@/components/Devices'
import Schedules from '@/components/Schedules'
import PidControlers from '@/components/PidControlers'
import DeviceDetails from '@/components/DeviceDetails'
import ZoneDetails from '@/components/ZoneDetails'
import Aside from '@/components/Aside'

Vue.use( Router )
const ws = new WebSocket( "ws://localhost:2801/" );
ws.lm = {};

ws.addEventListener( 'close', function ( event ) {
	console.log( "WebSocket Closed", event );
} );
ws.addEventListener( 'message', function ( e ) {
	let _msg = JSON.parse( e.data );
	if ( Array.isArray( _msg ) ) {
		switch ( _msg[ 0 ] ) {
			case "lm-update":
				{
					let updated = new CustomEvent( 'lm-updated', {
						detail: _msg[ 1 ]
					} );
					ws.lm = _msg[ 1 ];
					ws.dispatchEvent( updated );
					break;
				}
			case "detail":
				{
					let deviceDetail = new CustomEvent( 'device-detail', {
						detail: _msg[ 1 ]
					} );
					ws.dispatchEvent( deviceDetail );
					break;
				}
			case "lm-device-add":
				{
					let deviceAdd = new CustomEvent( 'device-add', {
						detail: _msg[ 1 ]
					} );
					ws.lm.devices.push( _msg[ 1 ] )
					console.log( "dispated event: deviceAdd, with detail =: ", _msg[ 1 ] );
					ws.dispatchEvent( deviceAdd );
					let updated = new CustomEvent( 'lm-updated', {
						detail: ws.lm
					} );
					console.log( "dispated event: lm-updated" );
					ws.dispatchEvent( updated )
					break;
				}
		}
	}
} );
ws.addEventListener( 'open', function () {
	ws.send( JSON.stringify( [ "client", {
		cmd: "load"
	} ] ) );
}, {
	once: true
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
		path: '/zone/:zoneID',
		name: 'zoneDetails',
		components: {
			default: ZoneDetails,
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