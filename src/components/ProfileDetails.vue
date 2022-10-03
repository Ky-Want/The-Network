<template>
  <div class="cover-img text-shadow" :style="{backgroundImage: `url(${profile.coverImg})`}">
    <img :src="profile.picture" alt="" height="120">
    <div class="my-5">
      <h3 class="">{{ profile.name }}

        <a v-if="profile.github" :href="profile.github" target="_blank"> -->
          <i class="mdi mdi-deviantart selectable"></i>
        </a>

      </h3>
      <p>{{profile.class}}</p>
      <p>{{ profile.bio }}</p>
    </div>

  </div>
</template>


<script>
import { Account } from '../models/Account.js';


export default {
  props: {
    profile: {
      type: Account,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.cover-img {
  height: 50vh;
  padding: 3rem;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>