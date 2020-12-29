<template>
  <div>
    <h1>Spending Overview</h1>
    <BudgetSummary />
    <hr style='margin: 2rem 0'>
    <SpendingSummary />
  </div>
</template>

<script>
import BudgetSummary from './BudgetSummary';
import SpendingSummary from './SpendingSummary';

export default {
  name: 'Overview',
  components: {
    BudgetSummary,
    SpendingSummary,
  }
}
</script>