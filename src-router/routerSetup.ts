import type {RouteRecordRaw} from 'vue-router';
import {createRouter, createWebHistory} from 'vue-router';
import HellNo from "./HellNo.vue";
import Posts from "./Posts.vue";
import Post from "./Post.vue";

const routes: RouteRecordRaw[] = [
	{
		path: '/hell-no',
		name: 'HellNo',
		component: HellNo,
	},
	{
		path: '/posts',
		name: 'Posts',
		component: Posts,
		children: [
			{
				path: ':id', component: Post,
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;