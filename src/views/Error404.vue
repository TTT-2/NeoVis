<template>
  <div class="flex items-center justify-center">
    <div class="text-center p-1">
      <span class="block font-semibold text-6xl">404</span>
      <span class="block text-xl">Sorry, we could not find anything..</span>
      <router-link to="/" class="text-xl border b-1 border-gray-500 dark:border-gray-200 rounded-md inline-block px-6 py-2 mt-4 hover:bg-gray-300 hover:text-gray-800">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
