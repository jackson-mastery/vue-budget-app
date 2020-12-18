<template>
    <div>
        <h2>Your Expenses</h2>
        <ul v-bind:key="expense.id" v-for="expense in expenses">
            <li>
                ${{expense.amount}}
                <button @click="$emit('del-exp', expense.id)">x</button>
            </li>
        </ul>
        <input type='text' v-model='nextAmount'>
        <button 
            @click="$emit('add-exp', nextAmount)"
        >
            Add
        </button>
    </div>
</template>

<script>
export default {
    name: "Expenses",
    props: ['expenses'],
    data() {
        return {
            nextAmount: '',
        }
    },
}
</script>