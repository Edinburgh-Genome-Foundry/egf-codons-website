<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  width: auto;
}
body {
    display: block;
    width: 600px;
    max-width: 95%;
    margin: 0 auto;
    font-size: 5mm;
}

#app {
  font-family: 'Raleway', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
