<template>
  <div id="app" class="bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-100 min-h-screen md:h-screen flex flex-col">
    <notifications position="bottom right" class="m-2" />
    <div class="flex items-center justify-between px-4 py-3 border-b border-gray-400 dark:border-gray-900 shadow z-40">
      <div>
        <router-link to="/" class="mx-1 text-2xl flex items-center">
          <img alt="TTT2 Logo" src="@/assets/logo.png" width="100px" class="inline mr-2">
          <span>API Documentation</span>
        </router-link>
      </div>
      <button @click="toggleTheme()" class="mx-2 hover:text-gray-700 dark:hover:text-gray-500">
        <font-awesome-icon class="inline dark:hidden" icon="moon" size="2x" />
        <font-awesome-icon class="hidden dark:inline" icon="sun" size="2x" />
      </button>
    </div>
    <div id="inner" class="flex flex-col md:flex-row flex-grow md:h-full md:overflow-hidden">
      <neo-sidebar class="bg-gray-300 dark:bg-gray-900 border-gray-400 dark:border-black border-r"/>
      <transition name="fade" mode="out-in" appear>
        <router-view class="flex-grow p-4 overflow-y-auto"/>
      </transition>
    </div>
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
      const root = document.querySelector('html')

      root?.classList.add('dark')
    }
  },
  methods: {
    toggleTheme (): void {
      const root = document.querySelector('html')

      root?.classList.toggle('dark')
    }
  }
})
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
