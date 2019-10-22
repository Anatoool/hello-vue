<template>
  <div id="app">
    <div class="header">
      Header
      <router-link class="link" to="/">Go to Home</router-link>
      <router-link class="link" to="/about">Go to About</router-link>
      <router-link class="link" to="/user/1">Go to User 1</router-link>
      <router-link class="link" to="/user/2">Go to User 2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .header {
    padding: 20px;
    box-shadow: 3px 3px 5px 6px #ccc;
  }

  .link {
    margin-left: 10px;
  }
</style>
