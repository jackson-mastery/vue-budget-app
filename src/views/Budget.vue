<template>
    <div>
        <h2>Your budget</h2>
        <ul v-for="item in budget" v-bind:key="item.id">
            <li>
                {{item.title}}: ${{item.amount}}
                <button @click="this.$store.commit('delBudget', item.id)">x</button>
            </li>
        </ul>
        <label for='budget-category'>Category</label>
        <input id='budget-category' type='text' v-model='nextCategory'>
        <label for='budget-amount'>Amount</label>
        <input id='budget-amount' type='text' v-model='nextAmount'>
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