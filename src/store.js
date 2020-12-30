import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const store = createStore({
  state () {
    return {
      budget: [],
      expenses: [],
      income: [],
    }
  },
  actions: {
    init (context) {
      context.dispatch('getBudgetItems');
      context.dispatch('getCategoryItems');
      context.dispatch('getIncomeItems');
      context.dispatch('getExpenseItems');
    },
    getBudgetItems (context) {
      axios.get('http://localhost:8000/budget_items/')
      .then(res => {
        context.commit('storeSetBudget', res.data);
      })
      .catch(err => {
        context.commit('storeSetBudgetError', err);
      });
    },
    getCategoryItems (context) {
      axios.get('http://localhost:8000/category/')
      .then(res => {
        context.commit('storeSetCategories', res.data);
      })
      .catch(err => {
        context.commit('storeSetCategoriesError', err);
      });
    },
    getIncomeItems (context) {
      axios.get('http://localhost:8000/income/')
      .then(res => {
        context.commit('storeSetIncome', res.data);
      })
      .catch(err => {
        context.commit('storeSetIncomeError', err);
      });
    },
    getExpenseItems (context) {
      axios.get('http://localhost:8000/expenses/')
      .then(res => {
        context.commit('storeSetExpenses', res.data);
      })
      .catch(err => {
        context.commit('storeSetExpensesError', err);
      });
    },
    postBudgetItem (context, item) {
      axios.post('http://localhost:8000/budget_items/', item)
      .then(() => {
        context.dispatch('getBudgetItems');
      });
    },
    postIncomeItem (context, item) {
      axios.post('http://localhost:8000/income/', item)
      .then(() => {
        context.dispatch('getIncomeItems');
      });
    },
    postExpenseItem (context, item) {
      axios.post('http://localhost:8000/expenses/', item)
      .then(() => {
        context.dispatch('getExpenseItems');
      });
    },
  },
  mutations: {
    storeSetBudget(state, newItems) {
      state.budget = [...newItems];
    },
    storeSetBudgetError(state, error) {
      console.error(error);
    },

    storeSetCategories(state, newItems) {
      state.categories = [...newItems];
    },
    storeSetCategoriesError(state, error) {
      console.error(error);
    },

    storeSetIncome(state, newItems) {
      state.income = [...newItems];
    },
    storeSetIncomeError(state, error) {
      console.error(error);
    },

    storeSetExpenses(state, newItems) {
      state.expenses = [...newItems];
    },
    storeSetExpensesError(state, error) {
      console.error(error);
    },

    addBudget (state, newItem) {
      const id = uuidv4();
      state.budget = [
        ...state.budget,
        {
          id: id,
          title: newItem.nextCategory,
          amount: parseInt(newItem.nextAmount),
        },
      ]
    },
    delBudget (state, id) {
      state.budget = state.budget.filter(item => item.id !== id);
    },
    addExpense (state, newAmount) {
      const id = uuidv4();
      state.expenses = [
        ...state.expenses, 
        {
          id: id, 
          amount: parseInt(newAmount)
        }
      ];
    },
    delExpense (state, id) {
      state.expenses = state.expenses.filter(expense => expense.id !== id);
    },
    addIncome (state, newAmount) {
      const id = uuidv4();
      state.income = [
        ...state.income, 
        {
          id: id, 
          amount: parseInt(newAmount)
        }
      ];
    },
    delIncome (state, id) {
      state.income = state.income.filter(income => income.id !== id);
    },
  }
});

export default store;