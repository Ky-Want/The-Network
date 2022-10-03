<template>
  <div class="profile-page" v-if="profile">
    <ProfileDetails :profile="profile" />
    <div>
      <PostCard v-for="p in profilePosts" :post="p" :key="p.id" />
    </div>
  </div>
  <div v-else>
    loading....
  </div>
  <div class="d-flex align-items-center pb-5 mx-3 mt-3">
    <button @click="changeProfilePage(previousPage)" :disabled="page == 1" class="btn btn-dark me-2"
      :class="{'disabled' : !previousPage}">Previous</button>

    <button @click="changeProfilePage(nextPage)" :disabled="page == lastPage"
      :class="`btn btn-dark ${!nextPage ? 'btn-info' : ''}`">Next</button>
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
      profilePosts: computed(() => AppState.activePost),

      page: computed(() => AppState.page),
      lastPage: computed(() => AppState.lastPage),

      nextPage: computed(() => AppState.profileNextPage),
      previousPage: computed(() => AppState.profilePreviousPage),


      async changeProfilePage(pageUrl) {
        try {
          await postsService.changeProfilePage(pageUrl)
        } catch (error) {
          logger.error(error)
          Pop.error(error.message)
        }
      },
    };
  },
  components: { PostCard, ProfileDetails }
}
</script>


<style lang="scss" scoped>

</style>