<template>
    <div>
        <h2>Your budget</h2>
        <table>
            <tr class='data-table--row' v-bind:key='item.id' v-for='item in budget'>
                <td style='min-width: 20%;'>${{ item.amount }}</td>
                <td>{{ item.title }}</td>
                <td><button @click='this.$store.commit(delBUdget, item.id)'>x</button> </td>
            </tr>
        </table>
        <label for='budget-amount'>Amount</label>
        <input id='budget-amount' type='text' v-model='nextAmount'>
        <label for='budget-category'>Category</label>
        <input id='budget-category' type='text' v-model='nextCategory'>
        <button 
            @click="this.$store.commit('addBudget', {nextCategory, nextAmount})"
        >
            Add
        </button>
    </div>
</template>

<script>
export default {
    name: "Budget",
    computed: {
        budget () {
            return this.$store.state.budget;
        }
    },
    data () {
        return {
            nextAmount: '',
            nextCategory: '',
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