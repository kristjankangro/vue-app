import {defineStore} from 'pinia';
import type {Photo} from "./photo";

export const usePhotosStore = defineStore('photos', {
    state: () => ({
        all: [] as Photo[],
    }),
    actions: {
        async getByAlbum(albumId: number): Promise<void> {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=100`);
            this.all = await res.json();
        },
    },
});