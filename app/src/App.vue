<template>
  <div id="app">
    <!-- <div class="bg-purple text-black sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange ...">
  Testdds
</div> -->
    <Nav class="mb-6" />
    <!-- <div id="nav">
    <router-link to="/"  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Home</router-link> |
        <router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About</router-link>
    <router-view/>
    </div> -->
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

  export default {
    name: 'App',
    components: {
      Nav
    }
  }
  </script>

<style >

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
