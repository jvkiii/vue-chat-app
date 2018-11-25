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
  height:100%;

  .container, .card-content { height:100%; }

  h2 {
    position:relative;
    bottom:5px;
    font-size: 2.6em; 
    margin:0;
    padding-bottom:5px;
    border-bottom:1px solid rgba(160, 160, 160, 0.2);;
  }

  .container {
    position: absolute;
    top:0; bottom:0;
    min-height:320px;
    margin:0 auto;
  }

  .card {
    position: absolute;
    top:20px; bottom:20px;
    left:20px; right:20px;
    margin:0;

    .card-action {
      position:absolute;
      bottom:0;
      height:110px;
      width:100%;
    }
  }

  @media screen and (min-width:600px) {
    .container {
      max-width: none;
    }
    
    .card {
      margin:0 auto;
      max-width:600px;
    }
  }

  .rel { position:relative; }
}
</style>
