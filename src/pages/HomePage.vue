<template>
  <!-- SECTION: Posts cards -->
  <PostsPage />


  <!-- V-for over this component  -->
  <Advert />
</template>




<script>
import PostsPage from "./PostsPage.vue";
import Advert from "../components/Advert.vue";
import Pop from "../utils/Pop.js";
import { advertsService } from "../services/AdvertsService.js"
import { onMounted } from "vue";
export default {
  setup() {
    async function getAds() {
      try {
        await advertsService.getAdverts()

      } catch (error) {
        Pop.error(error, "Getting ads")
      }
    }

    onMounted(() => {
      getAds()

    })


    return {


    };
  },
  components: { PostsPage, Advert }
}
</script>




<style scoped lang="scss">

</style>
