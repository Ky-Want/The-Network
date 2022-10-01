import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js";
import { api } from "./AxiosService.js";


class PostsService {
  async getPosts() {
    AppState.posts = [] // NOTE empty the posts to avoid data flashing
    const res = await api.get('api/posts')
    AppState.posts = res.data.map(p => new Post(p))

    console.log("Getting posts", res.data);
  }

  async getPostsById(id) {
    AppState.posts = [] // NOTE empty the posts to avoid data flashing
    const res = await axios.get('api/posts', {
      params: {
        id
      }
    })

    AppState.posts = res.data.map(p => new Post(p))

  }
}


export const postsService = new PostsService()