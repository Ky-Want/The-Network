<template>
  <nav class="navbar navbar-expand-lg bg-darker px-3">
    <!-- SECTION: home button/icon -->
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo"
          src="https://www.pngkey.com/png/full/137-1373884_networking-icon-white-2-networking-icon-png-white.png"
          height="45" />
      </div>
    </router-link>

    <!-- ??? -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- SECTION: Post nav button -->
    <div class="d-flex collapse navbar-collapse text-light navbar-nav me-auto justify-content-between" id="navbarText">
      <ul>
        The Network
      </ul>

      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>



<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>



<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.bg-darker {
  background-color: rgb(31, 29, 29);
}

.search {
  height: 30px;
  width: 30px;
}
</style>
