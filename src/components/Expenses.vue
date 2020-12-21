<template>
    <div>
        <h2>Your Expenses</h2>
        <ul v-bind:key="expense.id" v-for="expense in expenses">
            <li>
                ${{expense.amount}}
                <!-- Here we define a button to emit our (custom?) event 'del-exp' that the parent component is listening for -->
                <button @click="$emit('del-exp', expense.id)">x</button>
            </li>
        </ul>
        <!-- v-model= is how we bind the value in the input to the nextAmount variable in our state -->
        <input type='text' v-model='nextAmount'>
        <!-- Likewise, we define a button here to emit the 'add-exp' event that the parent is listening for -->
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