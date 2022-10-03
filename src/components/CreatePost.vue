<template>
  <i class="fa-solid fa-circle-plus d-flex justify-content-end sticky-bottom fs-3 pb-4 pt-2" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>

  <form @submit.prevent="handleSubmit">
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <div v-if="editable.listingType == 'post'">
          <h5 class="offcanvas-title" id="createPost">Create Post</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <label for="post-body" class="col-form-label"></label>
            <textarea v-model="editable.body" class="form-control" id="post-body" required
              placeholder="What would you like to say?"></textarea>
          </div>

          <div>
            <label for="imgUrl" class="form-label"></label>
            <input type="url" class="form-control" id="imgUrl" placeholder="URL" v-model="editable.imgUrl">
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button class="mb-5" type="submit" style=" width: 20vw;">Post</button>
        </div>
      </div>
    </div>
  </form>
</template>


<script>
import { ref } from "vue"
import { postsService } from "../services/PostsService.js"

import Pop from "../utils/Pop.js"


export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        try {
          const formData = editable.value
          debugger
          await postsService.createPost(formData)
          editable.value = {}
        } catch (error) {
          Pop.error(error, '[Submitting Form]')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>