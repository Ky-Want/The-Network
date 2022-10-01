<template>
  <div class="container">
    <!-- SECTION: Adverts cards -->
    <div class="mt-3">
      <AdvertCard v-for="a in adverts" :key="a.id" :advert="a" />
    </div>



    <!-- SECTION: Posts cards -->
    <div>
      <PostCard v-for="p in posts" :key="p.id" :post="p" />
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
  components: { AdvertCard, PostCard }
}
</script>




<style scoped lang="scss">

</style>
