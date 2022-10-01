<template>
  <div class="col-2 card">
    <img :src="advert.tall" alt="This a advert img">
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