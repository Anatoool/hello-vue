<template>
  <div v-bind:style="{ padding: '40px' }">
    <div>Home</div>
    <br />
    <div>
      Simple count: {{ count }}
      <button @click="add">Increment vuex count</button>
      <br>
      Getter count: {{ doneTodosCount }}
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  import { COUNTER_MUTATIONS } from '../store/modules/counter';

  export default {
    name: 'Home',
    methods: {
      add() {
        this.$store.commit(COUNTER_MUTATIONS.INCREMENT, 10); // first wau of mutation
      },
      ...mapMutations({ // second way of mutation
        incrementAlias: COUNTER_MUTATIONS.INCREMENT,
      })
    },
    computed: {
      ...mapState({
        count: state => state.counter.count,
      }),
      ...mapGetters({
        doneTodosCount: 'doneTodosCount'
      }),
    },
  }
</script>
