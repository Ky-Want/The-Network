<template>
  <div class="posts">

    <!-- SECTION: posts template -->
    <div class="container">
      <div class="row mt-4" id="PostCard">
        <div class="col-md-8 card">

          <div class="card-header d-flex justify-content-between align-items-center">
            <i class="fa-regular fa-circle-user selectable"></i>
            Post creator name
            <i class="fa-solid fa-ellipsis selectable"></i>
          </div>

          <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat, maxime veniam ratione ea
            molestias
            unde quia? Dolor, deleniti culpa totam esse iste saepe aperiam nesciunt veniam quam expedita soluta?
          </div>

          <div class="card-footer d-flex justify-content-end align-items-center gap-2">
            <!-- <i class="fa-regular fa-heart selectable pink"></i> -->
            <i class="fa-solid fa-heart selectable dark-pink"></i>
            <span>13</span>
          </div>

        </div>
      </div>
    </div>
    <!-- STUB: posts template end -->

  </div>
</template>



<script>



export default {
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