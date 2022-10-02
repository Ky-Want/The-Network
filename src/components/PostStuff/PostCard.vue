<template>
  <!-- SECTION: posts template -->
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-12 card elevation-4">

        <div class="card-header d-flex justify-content-between align-items-center">
          <!-- SECTION: post creators picture + name of the post -->
          <div>
            <img :src="post.creator.picture" alt="creator of the post (img)" class="img-fluid creator-pic rounded">
            {{post.creator.name}}
          </div>

          {{post.name}}

          <div>
            {{post.creator.updatedAt || post.creator.createdAt}}
          </div>

          <!-- SECTION: edit icon/modal -->
          <!-- TODO: make sure modal doesn't close on it's own and saves changes properly -->
          <i class="fa-solid fa-pen-to-square selectable" data-bs-toggle="modal" data-bs-target="#editModal"
            data-bs-whatever="@mdo">
          </i>

          <div class="d-flex gap-4">
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="editModalLabel">Edit Post</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="message-text" class="col-form-label"></label>
                        <textarea class="form-control" id="message-text"></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- SECTION: delete icon -->
            <i class="fa-solid fa-trash-can selectable" @click="deletePost(post.id)"></i>
          </div>
        </div>


        <!-- SECTION: post text + image -->
        <div class="row mx-3">
          {{post.body}}
        </div>
        <div class="col-9 card-body">
          <img :src="post.imgUrl" alt="" class="img-fluid post-pic">
        </div>

        <!-- SECTION: likes + number of likes -->
        <div class="card-footer d-flex justify-content-end align-items-center gap-2">
          <!-- <i class="fa-regular fa-heart selectable pink"></i> -->
          <i class="fa-solid fa-heart selectable dark-pink"></i>
          <span>{{post.likeIds.length}}</span>
        </div>

      </div>
    </div>
  </div>
</template>
  




<script>
import { Account } from "../models/Account.js";
import { Post } from "../models/Post.js";



export default {
  props: {
    post: {
      type: Post,
    },

    account: {
      type: Account,
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
