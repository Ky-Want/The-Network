<template>
  <!-- SECTION: Posts cards -->
  <Post v-for="p in posts" :key="p.id" :post="p" />


  <!-- V-for over this component  -->
  <Advert v-for="a in adverts" :key="a.id" :advert="a" />
</template>




<script>
import Pop from "../utils/Pop.js";
import { advertsService } from "../services/AdvertsService.js"
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { computed } from "@vue/reactivity";


export default {
  setup() {
    async function getAdverts() {
      try {
        await advertsService.getAdverts()
      } catch (error) {
        Pop.error(error, "Getting ads")
      }
    }


    async function getPosts() {
      try {
        await postsService.getPosts()
      } catch (error) {
        Pop.error(error, "Getting ads")
      }
    }


    onMounted(() => {
      getAdverts()
      getPosts()
    })

    return {
      adverts: computed(() => AppState.adverts),
      posts: computed(() => AppState.posts)
    };
  },
}
</script>




<style scoped lang="scss">

</style>
