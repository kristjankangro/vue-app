import {defineStore} from 'pinia';
import type {Photo} from "./photo";

interface PhotoState {
    // We'll use a Map to store photos, with the album ID as the key.
    // This way, we can cache each album's photo list.
    albumPhotosMap: Map<number, Photo[]>;
}

export const usePhotosStore = defineStore('photos', {
    state: (): PhotoState => ({
        albumPhotosMap: new Map<number, Photo[]>(),
    }),
    getters: {
        // Get photos for a specific album ID
        getForAlbum: (state) => {
            return (albumId: number): Photo[] => {
                return state.albumPhotosMap.get(albumId) || [];
            };
        },
    },
    actions: {
        async fetchBy(albumId: number): Promise<void> {
            // Check if we already have photos for this album in the cache
            if (this.albumPhotosMap.has(albumId)) {
                console.log(`Photos for album ${albumId} already fetched.`);
                return; // If we have them, no need to fetch again
            }
            console.log(`Fetching photos for album ${albumId}...`);
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=100`);
            this.albumPhotosMap.set(albumId, await res.json());
        },
    },
});