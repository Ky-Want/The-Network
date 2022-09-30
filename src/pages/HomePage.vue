<template>
  <!-- SECTION: Posts cards -->
  <Post />


  <!-- V-for over this component  -->
  <Advert />
</template>




<script>
import Post from "./components/Post.vue";
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
  components: { Post, Advert }
}
</script>




<style scoped lang="scss">

</style>
