<template>
    <div>
        <h2>Your Income</h2>
        <ul v-bind:key="income.id" v-for="income in income">
            <li>
                ${{income.amount}}
                <button @click="this.$store.commit('delIncome', income.id)">x</button>
            </li>
        </ul>
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