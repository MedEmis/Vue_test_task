
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)


const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{ path: '/', redirect: '/post-preView' },
		{ path: "/post-preView", name: "post-preView", component: () => import('../components/PostsPreView.vue') },
		{ path: "/postView/:post_id", name: "postView", component: () => import('../components/PostPage.vue') },

	]
})

export default router