<!--This is our top-level component -->
<!--Its state will be our source of truth, and it's equivalent to BudgetPlanning.js in the React version of this app -->

<!--This template is how we control what a component looks like when it's rendered -->
<template>
  <div>
    <div class='container'>
      <div class='row' style='margin-top:2rem'>
        <div style='display: flex; flex-direction: column;' class='col col-auto'>
          <router-link to='/'>Overview</router-link>
          <router-link to='/budget'>Budget</router-link>
          <router-link to='/expenses'>Expenses</router-link>
          <router-link to='/income'>Income</router-link>
        </div>
        <router-view class='col' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<!--Styling for the app goes here --> 
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}

.container {
  max-width: 1140px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}

@media only screen and (min-width: 768px) {
  .col-quarter {
    flex: 0 0 25%;
    max-width: 25%;
  }
}
@media only screen and (min-width: 768px) {
  .col-third {
    flex: 0 0 33%;
    max-width: 33%;
  }
}
@media only screen and (min-width: 768px) {
  .col-half {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media only screen and (min-width: 768px) {
  .col-two-thirds {
    flex: 0 0 67%;
    max-width: 67%;
  }
}
.col-quarter,
.col-third,
.col-half,
.col-two-thirds,
.col-full,
.col {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
	-ms-flex-preferred-size: 0;
	flex-basis: 0;
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	max-width: 100%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

</style>
