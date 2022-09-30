<template>
  <div class="">
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState.js"
import { advertsService } from "../services/AdvertsService.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    async function getAdverts() {
      try {
        await advertsService.getAdverts()
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }
    getAdverts()
    return {
      adverts: computed(() => AppState.adverts),
      advert: computed(() => AppState.adverts),

      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),


      async changePage(pageUrl) {
        try {
          await advertsService.getAdverts(pageUrl)
        } catch (error) {
          logger.error(error)
          Pop.error(error.message)
        }
      }
    }
  }
}



</script>


<style lang="scss" scoped>

</style>