<template>
  <img :src="advert.banner" alt="This a advert img">
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