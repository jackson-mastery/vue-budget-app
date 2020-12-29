<!--This is our top-level component -->
<!--Its state will be our source of truth, and it's equivalent to BudgetPlanning.js in the React version of this app -->

<!--This template is how we control what a component looks like when it's rendered -->
<template>
  <div>
    <div class='container'>
      <div class='row'>
        <div class='col-third'>
          <!-- Asking for a Budget component and binding a "budget" property to it -->
          <!-- <Budget v-bind:budget="budget" /> -->
          <Budget />
        </div>
        <div class='col-third'>
          <!-- Asking for an Expenses component and binding an "expenses" property to it, and adding two event listeners for add-exp and del-exp events which should fire addExpense and delExpense, respectively -->
          <Expenses />
        </div>
        <div class='col-third'>
          <Income />
        </div>
      </div>
      <hr style='margin: 2rem 0'>
      <div class='row'>
        <div class='col-full'>
          <BudgetSummary />
        </div>
      </div>
      <div class='row'>
        <div class='col-full'>
          <SpendingSummary />
        </div>
      </div>
    </div>
    <div class='container'>
      <div class='row'>
        <div style='display: flex; flex-direction: column;' class='col col-auto'>
          <router-link to='/'>Overview</router-link>
          <router-link to='/budget'>Budget</router-link>
          <router-link to='/expenses'>Expenses</router-link>
          <router-link to='/income'>Income</router-link>
        </div>
        <router-view class='col' />
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
// import Budget from './components/Budget';
import Budget from './views/Budget';
// import Expenses from './components/Expenses';
import Expenses from './views/Expenses';
// import Income from './components/Income';
import Income from './views/Income';
// import BudgetSummary from './components/BudgetSummary';
import BudgetSummary from './views/BudgetSummary';
// import SpendingSummary from './components/SpendingSummary';
import SpendingSummary from './views/SpendingSummary';

export default {
  name: 'App',
  components: {
    Budget,
    Expenses,
    Income,
    BudgetSummary,
    SpendingSummary,
  },
  methods: {
    // Add any "class methods" this component should have to manipulate data or react to user input
    // Methods add and remove expenses and incomes from the App's state
    // Vue seems to let us directly manipulate its state values
    addExpense(newAmount) {
      const id = uuidv4();
      this.expenses = [...this.expenses, {id: id, amount: parseInt(newAmount)}];
    },
    delExpense(id) {
      this.expenses = this.expenses.filter(expense => expense.id !== id);
    },
    addIncome(newAmount) {
      const id = uuidv4();
      this.income = [...this.income, {id: id, amount: parseInt(newAmount)}];
    },
    delIncome(id) {
      this.income = this.income.filter(income => income.id !== id);
    },
  },
  // This data() method needs to return an Object that represents the components initial state
  data() {
    return {
      budget: [
        {
          id: 0,
          title: "Food",
          amount: 500,
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
  }
}
</script>

<!--Styling for the app goes here --> 
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}

.container {
  max-width: 1140px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}

@media only screen and (min-width: 768px) {
  .col-quarter {
    flex: 0 0 25%;
    max-width: 25%;
  }
}
@media only screen and (min-width: 768px) {
  .col-third {
    flex: 0 0 33%;
    max-width: 33%;
  }
}
@media only screen and (min-width: 768px) {
  .col-half {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media only screen and (min-width: 768px) {
  .col-two-thirds {
    flex: 0 0 67%;
    max-width: 67%;
  }
}
.col-quarter,
.col-third,
.col-half,
.col-two-thirds,
.col-full,
.col {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
	-ms-flex-preferred-size: 0;
	flex-basis: 0;
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	max-width: 100%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

</style>
