<template>
  <div class="coverImg">
    <div class="about text-center">
      <h1>{{ account.name }}</h1>

      <ProfileDetails :profile="account" />

      <AccountForm class="elevation-2" />
    </div>
  </div>
</template>



<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import ProfileDetails from "../components/ProfileDetails.vue";
import AccountForm from "../components/AccountForm.vue";


export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { ProfileDetails, AccountForm }
}
console.log('account page log');
</script>




<style scoped>
img {
  max-width: 100px;
}

.coverImg {
  background-image: url();
}
</style>
