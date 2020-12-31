<template>
    <div>
        <h2>Your budget</h2>
        <table>
            <tr class='data-table--row' v-bind:key='item.id' v-for='item in budget'>
                <td style='min-width: 20%;'>${{ item.amount }}</td>
                <td v-if='categories' >{{ categories[item.category] }}</td>
                <td>{{ item.description }}</td>
                <td><button @click="this.$store.dispatch('deleteBudgetItem', item.id)">x</button> </td>
            </tr>
        </table>
        <label for='budget-amount'>Amount</label>
        <input id='budget-amount' type='text' v-model='nextAmount'>

        <label for='budget-category'>Category</label>
        <select id='budget-category' name='category' v-model='nextCategory'>
            <option v-bind:key=id v-for='(name, id) in categories' v-bind:value='id'>
                {{ name }}
            </option>
        </select>

        <label for='budget-description'>Description</label>
        <input id='budget-description' type='text' v-model='nextDescription'>
        <button @click="this.$store.dispatch('postBudgetItem', {time_period: '2021-01-01', amount: nextAmount, description: nextDescription, category: nextCategory})">
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
    data () {
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