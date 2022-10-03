<template>
  <div class="profile-page" v-if="profile">
    <ProfileDetails :profile="profile" />
    <div>
      <PostCard v-for="p in posts" :post="p" :key="p.id" />
    </div>
  </div>
  <div v-else>
    loading....
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import ProfileDetails from '../components/ProfileDetails.vue';
import PostCard from '../components/PostCard.vue';
import { profileService } from '../services/ProfileService.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';


export default {
  setup() {
    const route = useRoute();
    async function getProfileById() {
      try {
        await profileService.getProfileById(route.params.id);
      }
      catch (error) {
        Pop.error(error, "[GetProfile]");
      }
    }


    async function getPostsById() {
      try {
        await postsService.getPostsById(route.params.id)
      } catch (error) {
        Pop.error(error, '[GetPostsById]')
      }
    }


    onMounted(() => {
      getProfileById()
      getPostsById()
    });
    return {
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts)
    };
  },
  components: { PostCard, ProfileDetails }
}
</script>


<style lang="scss" scoped>

</style>