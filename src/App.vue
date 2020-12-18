<template>
  <div class='container'>
    <div class='row'>
      <div class='col-third'>
        <Budget v-bind:budget="budget" />
      </div>
      <div class='col-third'>
        <Expenses 
          v-bind:expenses="expenses"
          v-on:add-exp="addExpense"
          v-on:del-exp="delExpense" 
        />
      </div>
      <div class='col-third'>
        <Income 
          v-bind:income="income"
          v-on:add-inc="addIncome"
          v-on:del-inc="delIncome"
        />
      </div>
    </div>
    <hr style='margin: 2rem 0'>
    <div class='row'>
      <div class='col-full'>
        <BudgetSummary 
          v-bind:budget="budget"
          v-bind:expenses="expenses" 
        />
      </div>
    </div>
    <div class='row'>
      <div class='col-full'>
        <SpendingSummary 
          v-bind:expenses="expenses"
          v-bind:income="income" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import Budget from './components/Budget';
import Expenses from './components/Expenses';
import Income from './components/Income';
import BudgetSummary from './components/BudgetSummary';
import SpendingSummary from './components/SpendingSummary';

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
.col-full {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

</style>
