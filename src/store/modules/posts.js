import { axiosAPI } from './../../API/axiosAPI';


export default {
	actions: {
		async INFINITE_REQUEST(ctx, [page, limit]) {
			try {
				ctx.commit('POST_FETCHING_ON')
				const response = await axiosAPI.getPaginatedPosts(page, limit);
				ctx.commit('POST_FETCHING_OFF')
				ctx.commit('UPDATE_INFINITE_POST', response)
			} catch (error) {
				console.error(error)
			}
		},
		REQUEST_POST(ctx, id) {
			ctx.commit('POST_FETCHING_ON')
			ctx.commit('FIND_POST', id)
			ctx.commit('POST_FETCHING_OFF')
		}
	},
	mutations: {
		POST_FETCHING_ON(state) {
			state.isPostFetching = true
		},
		POST_FETCHING_OFF(state) {
			state.isPostFetching = false
		},
		UPDATE_INFINITE_POST(state, posts) {
			state.infinitePosts = [...state.infinitePosts, ...posts.data]
		},
		FIND_POST(state, id) {
			state.chosenPost = state.infinitePosts.filter(post => post.id === id)[0]
		},
	},
	state: {
		infinitePosts: [],
		chosenPost: null,
		isPostFetching: true
	},
	getters: {
		GET_INFINITE_POSTS(state) {
			return state.infinitePosts
		},
		GET_ONE_POST(state) {
			return state.chosenPost
		},
		GET_IS_POST_FETCHING(state) {
			return state.isPostFetching
		}
	},
}