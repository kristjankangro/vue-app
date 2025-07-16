import {createRouter, createWebHistory} from "vue-router";
import PhotoApp from "./PhotoApp.vue";
import PhotoList from "./PhotoList.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PhotoApp,
            children: [
                {
                    path: 'albums/:id',
                    name: 'album-photos',
                    component: () => PhotoList,

                }]
        }
    ]
})

