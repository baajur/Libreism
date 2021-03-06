import Vue from 'vue'
import Router from 'vue-router'
import Search from "./components/Search";
import Server from "./components/Server";

Vue.use(Router)

export default new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'search',
			component: Search
		},
		{
			path: '/*',
			name: 'server',
			component: Server
		}
	]
})
