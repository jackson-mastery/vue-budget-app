<template>
    <div>
        <h2>Your Expenses</h2>
        <table>
            <tr class='data-table--row' v-bind:key="expense.id" v-for="expense in expenses">
                <td style='min-width: 20%;'>${{ expense.amount }}</td>
                <td>Category</td>
                <td><button @click="this.$store.commit('delExpense', expense.id)">x</button></td>
            </tr>
        </table>
        <!-- v-model= is how we bind the value in the input to the nextAmount variable in our state -->
        <input type='text' v-model='nextAmount'>
        <!-- Likewise, we define a button here to emit the 'add-exp' event that the parent is listening for -->
        <button 
            @click="this.$store.commit('addExpense', nextAmount)"
        >
            Add
        </button>
    </div>
</template>

<script>
export default {
    name: "Expenses",
    computed: {
        expenses () {
            return this.$store.state.expenses;
        }
    },
    data() {
        return {
            nextAmount: '',
        }
    },
}
</script>

<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
}
.data-table--row:hover {
    background-color: #E7E7E7;
}
.data-table--row td {
    margin: none;
}
</style>