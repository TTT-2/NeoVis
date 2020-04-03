<template>
  <div id="app" class="bg-background text-on-background min-h-screen flex flex-col">
    <div class="flex items-center justify-between px-4 py-3 bg-brand">
      <div>
        <router-link to="/" class="mx-1 text-2xl flex items-center text-on-brand">
          <img alt="TTT2 Logo" src="@/assets/logo.png" width="100px" class="inline mr-2">
          <span>API Docs</span>
        </router-link>
      </div>
      <div>
        <a
          href="https://github.com/TTT-2/TTT2"
          class="block mx-1 border b-1 rounded-md px-4 py-2 hover:bg-on-brand hover:text-brand box-border"
        >
          Github
        </a>
      </div>
    </div>

    <router-view class="flex-grow"/>

    <footer class="flex-0 flex h-24 justify-around bg-brand p-2 text-on-brand items-center">
      <div>
        <router-link to="/imprint">Imprint</router-link>
      </div>
      <div>
        <button @click="theme('light')" class="mx-2 hover:text-on-brand-hover"><font-awesome-icon icon="sun" size="2x" /></button>
        <button @click="theme('dark')" class="mx-2 hover:text-on-brand-hover"><font-awesome-icon icon="moon" size="2x" /></button>
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
