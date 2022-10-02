<template>
  <div class="container">
    <div class="row">
      <SearchForm />

      <!-- SECTION: Adverts cards -->
      <AdvertCard v-for="a in adverts" :key="a.id" :advert="a" />


      <!-- SECTION: Posts cards -->
      <PostCard v-for="p in posts" :key="p.id" :post="p" />

      <i class="fa-solid fa-circle-plus d-flex justify-content-end sticky-bottom fs-3 pb-4 pt-2">
      </i>

    </div>



    <div class="d-flex align-items-center pb-5">
      <button class="btn btn-dark" :disabled="page == 1" @click="go(-1)">Previous</button>
      <h3 class="mx-3">{{page}}</h3>
      <button class="btn btn-dark" :disabled="page == lastPage" @click="go(1)">Next</button>
    </div>
  </div>
</template>


<script>
import Pop from "../utils/Pop.js";
import { advertsService } from "../services/AdvertsService.js"
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { computed } from "@vue/reactivity";
import AdvertCard from "../components/AdvertCard.vue";
import PostCard from "../components/PostCard.vue";
import { postsService } from "../services/PostsService.js";
import SearchForm from "../components/SearchForm.vue";
import { logger } from "../utils/Logger.js";


export default {
  setup() {
    async function getTopPosts() {
      try {
        await postsService.getTopPosts()
      } catch (error) {
        logger.error('[GettingTopPosts]', error)
        console.error('[GettingTopPosts]', error)
        Pop.error(error)
      }
    }
    getTopPosts()
    return {
      posts: computed(() => AppState.posts),
      page: computed(() => AppState.page),
      lastPage: computed(() => AppState.lastPage),
      async go(p) {
        try {
          if (AppState.page == 1 && p == -1) { throw new Error('There are no more pages left.') }
          if (!AppState.term) {
            await postsService.getTopPosts(AppState.page + p)
          } else {
            await postsService.getPostsBySearchTerm(AppState.term, AppState.page + p)
          }
        } catch (error) {
          logger.error('[GoNextOrMyPrevious]', error)
          Pop.error(error)
        }
      }
    }





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
        await postsService.getPosts();
      }
      catch (error) {
        Pop.error(error, "Getting ads");
      }
    }
    onMounted(() => {
      getAdverts();
      getPosts();
    });
    return {
      adverts: computed(() => AppState.adverts),
      posts: computed(() => AppState.posts)
    };
  },
  components: { AdvertCard, PostCard, SearchForm }
}
</script>




<style scoped lang="scss">

</style>
