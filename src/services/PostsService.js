import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js";
import { api } from "./AxiosService.js";


class PostsService {
  // async getPosts() {
  //   AppState.posts = []
  //   const res = await api.get('api/posts')
  //   console.log("Getting posts", res.data);

  //   AppState.posts = res.data.posts.map(p => new Post(p))
  // }


  async deletePost(id) {
    const res = await api.delete(`api/posts/${id}`)
    AppState.posts = AppState.posts.filter(p => p.id != id)
  }


  async getPostsById(id) {
    AppState.adverts = []
    const res = await api.get(`/api/posts/${id}`)
    AppState.activePost = new Post(res.data)
  }


  async createPost(formData) {
    const res = await api.post('/api/posts', formData)
    AppState.posts.push(new Post(res.data))

    console.log('creating post: ', createPost(formData));
    // AppState.posts = [...AppState.posts, new Post(res.data)]
  }


  async getPosts(page = 1) {
    AppState.posts = []
    const res = await api.get('/api/posts', {
      params: {
        page
      }
    })
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.page = res.data.page
    AppState.lastPage = res.data.total_pages

    console.log("Getting posts", res.data);
  }


  async getPostsBySearchTerm(term, page = 1) {
    const res = await api.get('api/posts?query=', {
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
}


export const postsService = new PostsService()