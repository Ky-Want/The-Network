<template>
  <div class="container">
    <div class="row">
      <SearchForm />

      <!-- SECTION: Adverts cards -->
      <AdvertCard v-for="a in adverts" :key="a.id" :advert="a" />


      <!-- SECTION: Posts cards -->
      <PostCard v-for="p in posts" :key="p.id" :post="p" />

      <CreatePost />
    </div>

    <div class="d-flex align-items-center pb-5">
      <button @click="changePage(previousPage)" :disabled="page == 1" class="btn btn-dark me-2"
        :class="{'disabled' : !previousPage}">Previous</button>

      <h3 class="mx-3">{{page}}</h3>

      <button @click="changePage(nextPage)" :disabled="page == lastPage"
        :class="`btn btn-dark ${!nextPage ? 'btn-info' : ''}`">Next</button>
    </div>
  </div>
</template>


<script>
import Pop from "../utils/Pop.js";
import { advertsService } from "../services/AdvertsService.js"
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { computed } from "@vue/reactivity";
import PostCard from "../components/PostCard.vue";
import { postsService } from "../services/PostsService.js";
import SearchForm from "../components/SearchForm.vue";
import { logger } from "../utils/Logger.js";
import AdvertCard from "../components/AdvertCard.vue";
import CreatePost from "../components/CreatePost.vue";


export default {
  setup() {
    async function getAdverts() {
      try {
        await advertsService.getAdverts();
      }
      catch (error) {
        Pop.error(error, "Getting ads");
      }
    }

    async function getPosts() {
      try {
        await postsService.getPosts()
      } catch (error) {
        logger.error('[GettingPosts]', error)
        console.error('[GettingPosts]', error)
        Pop.error(error)
      }
    }

    onMounted(() => {
      getAdverts();
      getPosts();
    });

    return {
      adverts: computed(() => AppState.adverts),
      posts: computed(() => AppState.posts),

      page: computed(() => AppState.page),
      lastPage: computed(() => AppState.lastPage),

      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),


      async changePage(pageUrl) {
        try {
          await postsService.getPosts(pageUrl)
        } catch (error) {
          logger.error(error)
          Pop.error(error.message)
        }
      },


      async deletePost(id) {
        try {
          const yes = await Pop.confirm('Delete the Listing?')
          if (!yes) { return }
          await postsService.deletePost(id)
        } catch (error) {
          Pop.error(error, '[Deleting Post]')
          Pop.confirm(confirm, '[Are you sure you want to delete this post]')
        }
      },


      async createPost(id) {
        const res = await api.post('/api/posts', formData)
        AppState.posts.push(new Post(res.data))

        console.log('creating post: ', createPost(id));
      },


      async go(n) {
        try {
          if (AppState.page == 1 && n == -1) { throw new Error('You have reached the end') }
          if (!AppState.term) {
            await postsService.getPosts(AppState.page + n)
          } else {
            await postsService.getPostsBySearchTerm(AppState.term, AppState.page + n)
          }
        } catch (error) {
          logger.error('[GoNextOrPrevious]', error)
          Pop.error(error)
        }
      }
    }
  },
  components: { SearchForm, AdvertCard, PostCard, CreatePost }
};
</script>




<style scoped lang="scss">

</style>
