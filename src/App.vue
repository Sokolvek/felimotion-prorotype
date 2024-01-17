<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div >
    <div class="block blue" v-felimation="{anim:'top', transition:'1'}"></div>
    <div class="block black" v-felimation="{anim:'top'}"></div>
    <div class="block aqua" v-felimation="{anim:'top', transition:'1'}"></div>
    <div class="block purple" v-felimation="{anim:'top', transition:'1'}"></div>
  </div>
</template>

<style scoped>

.block{
  height: 100svh;
}

.blue{
  background: blue;
}

.black{
  background: black;
}

.aqua{
  background: aqua;
}

.purple{
  background: purple;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
