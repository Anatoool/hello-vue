<template>
  <div v-bind:style="{ padding: '10px' }">
    User id: {{ $route.params.id }}
    Query {{ $route.query }}
    <button @click="sort">
      Apply sort
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created: function() {
      this.getUser();
    },
    beforeRouteUpdate (to, from, next) {
      next();
      this.getUser();
    },
    methods: {
      getUser: function() {
        // eslint-disable-next-line
        console.log(`Get user: ${this.$route.params.id} - with params`, this.$route.query);
      },
      sort: function() {
        // eslint-disable-next-line
        console.log('sort');
      },
    },
  }
</script>
