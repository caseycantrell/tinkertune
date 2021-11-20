<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/piano">Piano</router-link>
      |
      <router-link to="/drummachine">Drum Machine</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none; /* Standard syntax */
  box-sizing: border-box;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  padding: 5%;
  justify-content: space-between;
  flex-direction: column;
  height: inherit;
}
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.piano-container {
  margin-left: 8%;
  margin-right: 8%;
  height: 30%;
}
.config-container {
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 40%;
  width: 70%;
  padding-left: 6%;
}
.config-elem {
  display: flex;
  justify-content: flex-start;
}
.config-elem-cell {
  margin-right: 5%;
}
</style>
