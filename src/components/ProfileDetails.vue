<template>
  <div class="cover-img text-shadow" :style="{backgroundImage: `url(${profile.coverImg})`}">
    <img :src="profile.picture" alt="" height="120">
    <div class="my-5">
      <h3 class="">{{ profile.name }}
        <div v-if="profile.graduated"><i class="fa-solid fa-graduation-cap"></i></div>
      </h3>

      <div class="d-flex justify-content-center gap-5 fs-3">
        <a v-if="profile.github" :href="profile.github" target="_blank"> -->
          <i class="fa-brands fa-github selectable"></i>
        </a>

        <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank"> -->
          <i class="fa-brands fa-linkedin selectable"></i>
        </a>
      </div>

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