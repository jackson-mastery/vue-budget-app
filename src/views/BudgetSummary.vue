<template>
    <div v-if="overBudget">
        <p>You are ${{Math.abs(budgetDiff)}} over budget.</p>
    </div>
    <div v-else>
        <p>You are ${{budgetDiff}} under budget, nice job!</p>
    </div>
</template>

<script>
export default {
    name: "BudgetSummary",
    computed: {
        budgetDiff: function() {
            let totalBudget = 0;
            let totalSpending = 0;

            this.$store.state.budget.forEach(function (item) {
                totalBudget += item.amount;
            }, 0);

            this.$store.state.expenses.forEach(function (item) {
                totalSpending += item.amount;
            }, 0);
            return totalBudget - totalSpending;
        },
        overBudget: function() {
            return this.budgetDiff < 0;
        }
    },
}
</script>