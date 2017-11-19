import Vue from 'vue'
import App from './App.vue'
import Message from './Message.vue'
import Container from './Container.vue'
import Navigation from './Navigation.vue'

Vue.component( "app-message", Message )
Vue.component( "app-navigation", Navigation )
Vue.component( "app-container", Container )

new Vue( {
	el: '#app',
	render: h => h( App )
} )
