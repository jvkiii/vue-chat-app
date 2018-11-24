<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~styles/materialize';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .container {
    max-width:600px;
    margin-top:20px;
    transition:margin-top 0.5s;

    h2 {
      font-size: 2.6em; 
      margin-bottom: 30px;
      margin-top:10px;
    }
  }

  @media screen and (min-width: 600px) {
    .container {
      margin-top:100px;
    }
  }
}
</style>
