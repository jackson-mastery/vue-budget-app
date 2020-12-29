import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid';

const store = createStore({
  state () {
    return {
      budget: [
        {
          id: 0,
          title: "Food",
          amount: 400,
        },
        {
          id: 1,
          title: "Gas",
          amount: 50,
        },
        {
          id: 2,
          title: "Rent",
          amount: 650,
        },
        {
          id: 3,
          title: "Extras",
          amount: 300,
        },
      ],
      expenses: [
        {
          id: 1,
          amount: 150,
        },
        {
          id: 2,
          amount: 276,
        },
        {
          id: 3,
          amount: 89,
        },
      ],
      income: [
        {
          id: 1,
          amount: 1500,
        },
        {
          id: 2,
          amount: 3400,
        },
      ],
    }
  },
  mutations: {
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