import type {Post} from "../types/post";

export const testPosts: Post[] = [
	{
		id: 1,
		title: 'First Post',
		content: 'This is the first post.',
		likes: 10,
		hashtags: ['welcome', 'first']
	},
	{
		id: 2,
		title: 'Second Post',
		content: 'This is the second post.',
		likes: 5,
		hashtags: ['second', 'update']
	},
	{
		id: 3,
		title: 'Third Post',
		content: 'This is the third post.',
		likes: 20,
		hashtags: ['third', 'news']
	},
	{
		id: 4,
		title: 'Fourth Post',
		content: 'This is the fourth post.',
		likes: 15,
		hashtags: ['fourth', 'info']
	}
]