<template>
  <form class="card account-form" @submit.prevent="handleSubmit">
    <div class="card-body text-start">


      <div class="form-check mt-4">
        <input class="form-check-input" v-model="editable.graduated" type="checkbox" name="Deviations" id="graduated">
        <label class="form-check-label" for="Deviations1">
          Graduated
        </label>
      </div>


      <div>
        <label for="name">Name:</label>
        <input type="text" class="form-control" v-model="editable.name" required name="name">
      </div>

      <div>
        <label for="picture">Picture:</label>
        <input type="url" class="form-control" v-model="editable.picture" required name="picture" placeholder="picture">
      </div>

      <div>
        <label for="coverImg">Cover Image:</label>
        <input type="url" class="form-control" v-model="editable.coverImg" name="coverImg">
      </div>

      <div>
        <label for="github">Github Link:</label>
        <input type="url" class="form-control" v-model="editable.github" name="Deviations">
      </div>

      <div>
        <label for="linkedin">Linkedin Link:</label>
        <input type="url" class="form-control" v-model="editable.linkedin" name="Deviations">
      </div>

      <div>
        <label for="class">Class:</label>
        <input type="text" class="form-control" v-model="editable.class" name="class">
      </div>

      <div>
        <label for="bio">Bio:</label>
        <textarea type="text" class="form-control" v-model="editable.bio" name="bio" rows="8"
          style="resize:none"></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-primary w-100 mt-2">Save</button>
      </div>
    </div>
  </form>
</template>


<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { accountService } from '../services/AccountService.js';
import Pop from '../utils/Pop.js';



export default {
  setup() {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...AppState.account }
    })

    return {
      editable,
      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value)
        } catch (error) {
          Pop.error(error, '[EditAccount]')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>