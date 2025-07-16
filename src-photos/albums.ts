import {defineStore} from 'pinia';

export const useAlbumsStore = defineStore('albums', {
    state: () => ({
        albumList: [] as string[],
    }),
    getters: {
        albumCount: (state) => state.albumList.length,
    },
    actions: {
        addAlbum(album: string) {
            this.albumList.push(album);
        },
    },
});