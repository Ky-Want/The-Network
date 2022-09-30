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
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'Posts' }" class="btn text-success lighten-30 selectable text-uppercase">
            Posts
          </router-link>
        </li>
      </ul>

      <!-- SECTION: search bar -->
      <!-- TODO: include search (filter probably) function -->
      <div class="mx-5">
        <div class="input-group flex-nowrap" style="width: 40vw">
          <span class="input-group-text selectable" id="addon-wrapping">
            <img
              src="https://toppng.com/uploads/preview/magnifying-glass-icon-no-background-magnifying-glass-icon-with-transparent-background-11553405953lli.png"
              alt="search logo" class="img-fluid search">
          </span>
          <input type="text" class="form-control" placeholder="Search" aria-label="Search"
            aria-describedby="addon-wrapping">
        </div>
      </div>

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
