import {defineStore} from 'pinia';
import {Photo} from "./photo";

export const usePhotosStore = defineStore('photos', {
    state: () => ({
        all: [] as Photo[],
    }),
    actions: {
        // Define your actions here
    },
});