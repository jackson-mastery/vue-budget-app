<template>
    <div>
        <h2>Your Expenses</h2>
        <table>
            <tr class='data-table--row' v-bind:key="expense.id" v-for="expense in expenses">
                <td style='min-width: 20%;'>${{ expense.amount }}</td>
                <td v-if='categories' >{{ categories[expense.category] }}</td>
                <td>{{ expense.description }}</td>
                <td><button @click="this.$store.dispatch('deleteExpenseItem', expense.id)">x</button></td>
            </tr>
        </table>
        <label for='expense-amount'>Amount</label>
        <input id='expense-amount' type='text' v-model='nextAmount'>
        
        <label for='expense-category'>Category</label>
        <select id='expense-category' name='category' v-model='nextCategory'>
            <option v-bind:key=id v-for='(name, id) in categories' v-bind:value='id'>
                {{ name }}
            </option>
        </select>

        <label for='expense-description'>Description</label>
        <input id='expense-description' type='text' v-model='nextDescription'>
        <button @click="this.$store.dispatch('postExpenseItem', {date: '2021-01-01', amount: nextAmount, description: nextDescription, category: nextCategory})">
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
        },
        categories () {
            if (this.$store.state.categories == null) {
                return this.$store.state.categories;
            }
            // We don't want 'income' categories
            const filteredCategories = this.$store.state.categories.filter(category => {return category.cat_type === 2;});
            // Create a lookup table to make displaying category names easier
            const categoryMap = {};
            for (const category of filteredCategories) {
                categoryMap[category.id] = category.name;
            }
            return categoryMap;
        },
    },
    data() {
        return {
            nextAmount: '',
            nextCategory: '',
            nextDescription: '',
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