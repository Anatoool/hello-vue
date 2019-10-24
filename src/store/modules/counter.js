export const COUNTER_MUTATIONS = {
  INCREMENT: 'COUNTER_MUTATIONS_INCREMENT',
};

export const counter = {
  state: {
    count: 1,
  },
  mutations: {
    [COUNTER_MUTATIONS.INCREMENT](state, payload) {
      state.count = state.count + payload;
    },
  }
};
