import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { api } from "./AxiosService.js";


class PostsService {
  async deletePost(id) {
    const res = await api.delete(`api/posts/${id}`)
    AppState.posts = AppState.posts.filter(c => c.id != id)
  }


  async getPostsById(id) {
    AppState.adverts = []
    const res = await api.get(`/api/profiles/${id}/posts`)
    console.log('ricky profile posts', res.data)
    // AppState.activePost = new Post(res.data)
    AppState.activePost = res.data.posts.map(p => new Post(p))
    AppState.profileNextPage = res.data.older
    AppState.profilePreviousPage = res.data.newer
  }


  async createPost(formData) {
    logger.log('create')
    const res = await api.post('/api/posts', formData)
    AppState.posts.push(new Post(res.data))

    console.log('creating post: ');
    // AppState.posts = [...AppState.posts, new Post(res.data)]
  }


  async getPosts(page) {
    AppState.posts = []
    const res = await api.get('/api/posts?page', {
      params: {
        page
      }
    })
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.page = res.data.page
    AppState.lastPage = res.data.total_pages
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer

    console.log("Getting posts", res.data);
  }


  async changePage(pageUrl) {
    const res = await api.get(pageUrl)
    logger.log(res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.page = res.data.page

    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
  }



  async changeProfilePage(pageUrl) {
    const res = await api.get(pageUrl)
    logger.log(res.data)
    AppState.activePost = res.data.posts.map(p => new Post(p))
    AppState.page = res.data.page

    AppState.profileNextPage = res.data.older
    AppState.profilePreviousPage = res.data.newer
  }



  async getPostsBySearchTerm(term, page = 1) {
    const res = await api.get('api/posts', {
      params: {
        query: term,
        page
      }
    })
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.page = res.data.page
    AppState.lastPage = res.data.total_pages
    AppState.term = term
  }


  async like(likeIds) {
    if (AppState.posts.find(m => m.id == likeIds.id)) {
      throw new Error('You already liked it....')
    }
    AppState.posts.push(likeIds)
    saveState('post', AppState.posts)
  }
}


export const postsService = new PostsService()