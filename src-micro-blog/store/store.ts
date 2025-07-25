import {reactive, readonly} from 'vue';
import type {Post} from "../types/post";
import {testPosts} from "../seed/testPosts";

class Store {
	// We use a private property to hold the reactive state
	private readonly _state: { posts: Post[], currentTag: string };

	constructor() {
		this._state = reactive({
			posts: testPosts,
			currentTag: '',
		});
	}

	// This is a good practice to prevent components from directly changing the state.
	get state() {
		return readonly(this._state);
	}

	get filteredPosts() {

		if (!this._state.currentTag) {
			return this._state.posts;
		}
		return this._state.posts.filter(post =>
			post.hashtags.some(h => h.includes(this._state.currentTag)));
	}

	setHashtag(tag: string) {
		this._state.currentTag = (tag === this._state.currentTag) ? '' : tag;
	}

	// Actions are public methods that can be called to modify the state.
	addPost(post: Post) {
		const newId = this._state.posts.length > 0 ? Math.max(...this._state.posts.map(p => p.id)) + 1 : 1;
		this._state.posts.push({id: newId, ...post});
	}

	incrementLikes(post: Post) {
		let p = this._state.posts.find(p => p.id === post.id);
		if (!p) return;

		p.likes++;
	}
}

// We export a single, shared instance of the store.
export const store = new Store();