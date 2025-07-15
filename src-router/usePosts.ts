import type {Post} from "./types/post";
import {ref} from "vue";
import {testPosts} from "./seed/testPosts";

export function usePosts() {

    const posts = ref<Post[]>(testPosts);

    const addPost = (post: Post) => {
        posts.value.push(post);
    }

    return {posts, addPost};
}