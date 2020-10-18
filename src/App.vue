<template>
  <div id="app" class="bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-100 h-screen flex flex-col">
    <notifications position="top right" class="m-2" />
    <div class="flex items-center justify-between px-4 py-3 border-b border-gray-400 dark:border-gray-900 shadow z-40">
      <div>
        <router-link to="/" class="mx-1 text-2xl flex items-center">
          <img alt="TTT2 Logo" src="@/assets/logo.png" width="100px" class="inline mr-2">
          <span>API Documentation</span>
        </router-link>
      </div>
    </div>
    <div id="inner" class="flex flex-col md:flex-row flex-grow md:h-full md:overflow-hidden">
      <neo-sidebar class="bg-gray-300 dark:bg-gray-900 border-gray-400 dark:border-black border-r"/>
      <router-view class="flex-grow p-4"/>
    </div>
    <footer class="flex-0 flex h-24 justify-around p-2 items-center border-t border-gray-400 dark:border-gray-900">
      <div>
        <router-link to="/imprint">Imprint</router-link>
      </div>
      <div>
        <button @click="toggleTheme()" class="mx-2 hover:text-gray-700 dark:hover:text-gray-500">
          <font-awesome-icon class="dark:hidden" icon="moon" size="2x" />
          <font-awesome-icon class="hidden dark:inline" icon="sun" size="2x" />
        </button>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NeoSidebar from '@/components/Sidebar.vue'
import Notifications from 'vue-notification'

Vue.use(Notifications)

export default Vue.extend({
  name: 'app',
  components: {
    NeoSidebar
  },
  data: () => ({
    themes: ['light', 'dark']
  }),
  mounted: function () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector('html').classList.add('dark')
    }
  },
  methods: {
    toggleTheme (): void {
      document.querySelector('html').classList.toggle('dark')
    }
  }
})
</script>
