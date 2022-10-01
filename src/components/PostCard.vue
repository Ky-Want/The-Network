<template>
  <div class="posts">

    <!-- SECTION: posts template -->
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-8 card">

          <div class="card-header d-flex justify-content-between align-items-center">
            <!-- <i class="fa-regular fa-circle-user selectable"></i> -->
            <img :src="post.creatorId" alt="creator pic">
            {{post.name}}
            <i class="fa-solid fa-ellipsis selectable"></i>
          </div>

          <div class="card-body">
            {{post.body}}
          </div>

          <div class="card-footer d-flex justify-content-end align-items-center gap-2">
            <!-- <i class="fa-regular fa-heart selectable pink"></i> -->
            <i class="fa-solid fa-heart selectable dark-pink"></i>
            <span>{{post.likeIds}}</span>
          </div>

        </div>
      </div>
    </div>
    <!-- STUB: posts template end -->

  </div>
</template>



<script>
import { Post } from "../models/Post.js";


export default {
  props: {
    post: {
      type: Post,
      required: true
    }
  },


  setup() {

    return {
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
</style>