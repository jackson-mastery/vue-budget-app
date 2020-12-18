<template>
    <div>
        <h2>Your Income</h2>
        <ul v-bind:key="income.id" v-for="income in income">
            <li>
                ${{income.amount}}
                <button @click="$emit('del-inc', income.id)">x</button>
            </li>
        </ul>
        <input type='text' v-model='nextAmount'>
        <button
            @click="$emit('add-inc', nextAmount)"
        >
            Add
        </button>
    </div>
</template>

<script>
export default {
    name: "Income",
    props: ['income'],
    data() {
        return {
            nextAmount: '',
        }
    },
}
</script>