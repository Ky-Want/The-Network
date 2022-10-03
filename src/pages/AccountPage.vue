<template>
  <div class="coverImg">
    <div class="about text-center">
      <h1>{{ account.name }}</h1>

      <ProfileDetails :profile="account" />

      <img class="rounded" :src="account.picture" :alt="account.name" />

      <AccountForm class="elevation-2" />

      <p>{{ account.email }}</p>
      <div>{{ account.bio }}</div>
    </div>
  </div>
</template>



<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import ProfileDetails from "../components/ProfileDetails.vue";


export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { ProfileDetails }
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
