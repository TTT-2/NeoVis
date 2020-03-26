<template>
  <div id="app" class="bg-background text-on-background min-h-screen flex flex-col">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view class="flex-grow"/>
    <footer class="flex-0 flex h-32 justify-around bg-brand p-2 text-on-brand">
      <div class="flex items-center">
        <button @click="theme('light')" class="m-1 hover:text-on-brand-hover"><font-awesome-icon icon="sun" size="2x" /></button>
        <button @click="theme('dark')" class="m-1 hover:text-on-brand-hover"><font-awesome-icon icon="moon" size="2x" /></button>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'app',
  data: () => ({
    themes: ['light', 'dark']
  }),
  methods: {
    theme (name?: string) {
      document.body.removeAttribute('data-theme')

      if (name) {
        document.body.setAttribute('data-theme', name)
      }
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}
</style>
