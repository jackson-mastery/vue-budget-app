<template>
    <div>
        <h2>Your budget</h2>
        <ul v-for="item in budget" v-bind:key="item.id">
            <li>{{item.title}}: ${{item.amount}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Budget",
    computed: {
        budget () {
            return this.$store.state.budget;
        }
    }
}
</script>