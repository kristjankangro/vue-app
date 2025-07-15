import type {Post} from "../types/post";

export const testPosts: Post[] = [
    {
        id: 1,
        title: 'First Post',
        content: 'This is the first post. Welcome to the micro-blog! Feel free to explore.',
        likes: 10,
        hashtags: ['welcome', 'first', 'ts', 'vue', 'micro-blog']
    },
    {
        id: 2,
        title: 'Second Post',
        content: `This is the second post. It has some updates. Check it out! It also includes some new features. Stay tuned for more updates. You can also follow us on social media for the latest news.`,
        likes: 5,
        hashtags: ['second', 'update', 'vue', 'micro-blog']
    },
    {
        id: 3,
        title: 'Third Post',
        content: 'This is the third post. It contains some interesting information.',
        likes: 20,
        hashtags: ['third', 'news']
    },
    {
        id: 4,
        title: 'Fourth Post',
        content: 'This is the fourth post. It has some additional information about the API.',
        likes: 15,
        hashtags: ['fourth', 'info', 'comp api']
    }
]