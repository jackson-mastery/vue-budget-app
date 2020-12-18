<template>
    <div>
        <h2>Your budget</h2>
        <ul v-bind:key="item.id" v-for="item in budget">
            <li>{{item.title}}: ${{item.amount}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Budget",
    props: ["budget"]
}
</script>