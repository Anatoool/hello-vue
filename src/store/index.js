import Vue from 'vue';
import Vuex from 'vuex';
import { counter } from './modules/counter';
import { todos } from './modules/todos';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    counter,
    todos,
  }
});
