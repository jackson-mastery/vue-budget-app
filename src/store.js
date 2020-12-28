import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      budget: '$100',
    }
  },
  mutations: {
    setBudget (state, value) {
      state.budget = value;
    }
  }
});

export default store;