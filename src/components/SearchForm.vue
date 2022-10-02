<template>
  <div class="pt-3 pb-3">
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <input type="text" class="form-control" required="true" minlength="2" placeholder="Find a post..." name="search"
          v-model="editable.term">
        <label for="search" class="visually-hidden">Search</label>
        <button type="submit" class="btn btn-dark "><i class="mdi mdi-magnify"></i></button>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from 'vue';
import { postsService } from '../services/PostsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';


export default {
  setup() {
    const editable = ref({})

    return {
      editable,
      async handleSubmit() {
        try {
          await postsService.getPostsBySearchTerm(editable.value.term)
        } catch (error) {
          logger.error('[SearchForm]', error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>