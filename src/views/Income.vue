<template>
    <div>
        <h2>Your Income</h2>
        <table>
            <tr class='data-table--row' v-bind:key="income.id" v-for="income in income">
                <td style='min-width: 20%;'>${{ income.amount }}</td>
                <td>Category</td>
                <td><button @click="this.$store.commit('delIncome', income.id)">x</button></td>
            </tr>
        </table>
        <input type='text' v-model='nextAmount'>
        <button
            @click="this.$store.commit('addIncome', nextAmount)"
        >
            Add
        </button>
    </div>
</template>

<script>
export default {
    name: "Income",
    computed: {
        income () {
            return this.$store.state.income;
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