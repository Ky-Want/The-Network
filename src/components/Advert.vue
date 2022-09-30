<template>
  <div class="row card">
    <div class="col-md-9 card-body">
      <img :src="advert.square" alt="This a advert img">

    </div>
  </div>
</template>


<script>
import { Advert } from "../models/Advert.js";

export default {

  props: {
    advert: {
      type: Advert,
      required: true
    }
  },


  setup(props) {

    return {


    }
  }
}
</script>


<style lang="scss" scoped>

</style>