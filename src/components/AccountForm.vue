<template>
  <form class="card account-form" @submit.prevent="handleSubmit">
    <div class="card-body text-start">
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
        <label for="email">Email Link:</label>
        <input type="url" class="form-control" v-model="editable.email" name="Deviations">
      </div>

      <!-- <div>
        <label for="graduated">Graduated?</label>
        <input type="boolean" class="form-control" v-model="editable.graduated" name="Deviations">
      </div> -->

      <div class="form-check">
        <input class="form-check-input" type="boolean" name="flexRadioDefault" id="graduated">
        <label class="form-check-label" for="flexRadioDefault1">
          Graduated
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="boolean" name="flexRadioDefault" id="notGraduated" checked>
        <label class="form-check-label" for="flexRadioDefault2">
          Not Graduated
        </label>
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