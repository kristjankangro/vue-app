import {defineStore} from 'pinia';
import type {Album} from "./album";

export const useAlbumsStore = defineStore('albums', {
    state: () => ({
        all: [] as Album[]
    }),
    getters: {
        albumCount: (state) => state.all.length,
    },
    actions: {
        async fetch() {
            const res = await fetch("https://jsonplaceholder.typicode.com/albums?_limit=10");
            this.all = await res.json();
        },
        addAlbum(album: string) {
            this.albumList.push(album);
        },
    },
});