<template>

  <header>
    <Navbar />
  </header>



  <main>
    <router-view />
  </main>



  <footer>
    <PromotePage />
  </footer>

</template>





<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import PromotePage from "./pages/PromotePage.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, PromotePage }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
