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
    props: ["budget", "expenses"],
    // data() {
    //     return {
    //         overBudget: false,
    //         budgetDiff: 0,
    //     }
    // },
    // I had to experiment with how to dynamically calculate this 'budgetDiff' value based on the component's props. This 'computed' lifecycle method seemed to work, other things I tried are commented out, but I'm not 100% sure this is the correct way to do this with Vue.
    computed: {
        budgetDiff: function() {
            let totalBudget = 0;
            let totalSpending = 0;

            this.budget.forEach(function (item) {
                totalBudget += item.amount;
            }, 0);

            this.expenses.forEach(function (item) {
                totalSpending += item.amount;
            }, 0);
            return totalBudget - totalSpending;
        },
        overBudget: function() {
            return this.budgetDiff < 0;
        }
    },
    // created: function() {
        
    //     if (budgetDiff >= 0) {
    //         this.overBudget = false;
    //     } else if (budgetDiff < 0) {
    //         this.overBudget = true;
    //     }
    //     this.budgetDiff = budgetDiff;
    // },
}
</script>