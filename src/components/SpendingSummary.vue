<template>
    <div v-if="totalExpenses > totalIncome">
        <p>Your net worth decreased ${{totalIncome - totalExpenses}}</p>
    </div>
    <div v-else>
        <p>Your net worth increased ${{totalIncome - totalExpenses}}</p>
    </div>
</template>

<script>
export default {
    name: "SpendingSummary",
    props: ["expenses", "income"],
    computed: {
        totalExpenses: function() {
            let totalExpenses = 0;
            this.expenses.forEach(function(element) {
                totalExpenses += element.amount;
            });
            return totalExpenses;
        },
        totalIncome: function() {
            let totalIncome = 0;
            this.income.forEach(function(element) {
                totalIncome += element.amount;
            });
            return totalIncome;
        },
    },
    // data() {
    //     return {
    //         totalExpenses: 0,
    //         totalIncome: 0,
    //     }
    // },
    // created: function() {
    //     let totalExpenses = 0;
    //     let totalIncome = 0;

    //     this.expenses.forEach(function(element) {
    //         totalExpenses += element.amount;
    //     });
    //     this.totalExpenses = totalExpenses;

    //     this.income.forEach(function(element) {
    //         totalIncome += element.amount;
    //     });
    //     this.totalIncome = totalIncome;

    // },
}
</script>