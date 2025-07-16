import {defineStore} from 'pinia';

export const useAlbumsStore = defineStore('albums', {
    state: () => ({
        all: [] as any[]
    }),
    getters: {
        albumCount: (state) => state.all.length,
    },
    actions: {
        async fetch() {
            const res = await fetch("https://jsonplaceholder.typicode.com/albums");
            this.all = await res.json();
        },
        addAlbum(album: string) {
            this.albumList.push(album);
        },
    },
});