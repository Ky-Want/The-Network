<template>

  <header>
    <Navbar />
  </header>



  <main>
    <router-view />
  </main>



  <footer>
  </footer>

</template>





<script>
import { computed } from 'vue'
import { AppState } from "./AppState.js"
import Navbar from './components/Navbar.vue'
import { Advert } from "./models/Advert.js"


export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Advert }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
