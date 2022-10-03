<template>
  <!-- SECTION: posts template -->
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-12 card elevation-4">
        <div class="card-header d-flex justify-content-between align-items-center">



          <!-- SECTION: post creators picture + name of the post -->
          <router-link :to="{ name: 'Profile', params: {id: post.creator.id} }">
            <div>
              <img :src="post.creator.picture" alt="creator of the post (img)" class="img-fluid creator-pic rounded">
              {{post.creator.name}}
            </div>
          </router-link>


          {{post.name}}
          <div>
            {{post.creator.updatedAt || post.creator.createdAt}}
          </div>



          <!-- SECTION: delete icon -->
          <div class="d-flex gap-4" v-if="account.id == post.creatorId">
            <i class="mdi mdi-delete-forever fs-4 selectable rounded" @click="deletePost(post.id)"></i>
          </div>
        </div>




        <!-- SECTION: post text + image -->
        <div class=" row mx-3">
          {{post.body}}
        </div>
        <div class="col-9 card-body">
          <img :src="post.imgUrl" alt="" class="img-fluid post-pic">
        </div>



        <!-- SECTION: likes + number of likes -->
        <div class="card-footer d-flex justify-content-end align-items-center gap-2">
          <i class="fa-solid fa-heart selectable dark-pink" @click="like"></i>
          <span>{{post.likeIds.length}}</span>
        </div>

      </div>
    </div>
  </div>
</template>




<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { Post } from "../models/Post.js";
import { postsService } from "../services/PostsService.js"
import Pop from "../utils/Pop.js";


export default {
  props: {
    post: {
      type: Post,
    },

    account: {
      type: Account,
    }
  },


  setup(props) {
    return {
      account: computed(() => AppState.account),




      async deletePost(id) {
        try {
          await Pop.confirm('Are you sure you want to delete this post?')
          await postsService.deletePost(id)
        } catch (error) {
          console.error('deleting post', error)
        }
      },


      async like() {
        try {
          //TODO: access props in set up, pass post id to service
          await postsService.like(props.post.id)
        } catch (error) {
          console.error('liking post', error)
        }
      }
    }
  }
}
</script>




<style>
.pink {
  color: pink;
}

.dark-pink {
  color: rgb(253, 135, 155);
}

.post-pic {
  max-width: 100vw;
  max-height: 15rem;
}

.creator-pic {
  height: 3rem;
  width: 3rem;
}

.edit {
  background-image: url('https://spng.pngfind.com/pngs/s/70-704184_png-file-svg-pencil-edit-icon-png-transparent.png');
}
</style>
