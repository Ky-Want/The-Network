<template>

  <header>
    <Navbar />
  </header>



  <main>
    <router-view />
  </main>



  <footer>
    <div>
      <AdvertPage />
    </div>
  </footer>

</template>





<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import AdvertPage from "./pages/AdvertPage.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, AdvertPage }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
