import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js";
import { api } from "./AxiosService.js";


class PostsService {
  async getPosts() {
    const res = await api.get('api/posts')
    // AppState.posts = res.data.map(p => new Post(p))

    AppState.posts = Object.keys(res).map(key => {
      return { [key]: res[key] };
    });

    console.log(AppState.posts);
  }


  async deletePosts(id) {
    const res = await api.delete(`api/posts/${id}`)
    AppState.posts = AppState.posts.filter(p => p.id != id)
  }


  async getPostsById(id) {
    const res = await api.get(`/api/posts/${id}`)
    AppState.activePost = new Post(res.data)
  }


  async createPost(id) {
    const res = await api.post('/api/posts', formData)
    AppState.posts.push(new Post(res.data))
    // AppState.posts = [...AppState.posts, new Post(res.data)]
  }
}


export const postsService = new PostsService()