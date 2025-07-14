import {reactive, readonly} from 'vue';
import type {Post} from "../types/post";
import {testPosts} from "../seed/testPosts";

class Store {
	// We use a private property to hold the reactive state
	private readonly _state: { posts: Post[] };

	constructor() {
		this._state = reactive({
			posts: testPosts,
		});
	}

	// A public getter provides readonly access to the state.

	// This is a good practice to prevent components from directly changing the state.
	get state() {
		return readonly(this._state);
	}

	// Actions are public methods that can be called to modify the state.
	addPost(post: Post) {
		const newId = this._state.posts.length > 0 ? Math.max(...this._state.posts.map(p => p.id)) + 1 : 1;
		this._state.posts.push({id: newId, ...post});
	}
}

// We export a single, shared instance of the store.
export const store = new Store();