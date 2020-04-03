<template>
  <div class="flex items-center justify-center">
    <div class="text-center p-1 text-on-background">
      <span class="block font-semibold text-6xl">404</span>
      <span class="block text-xl">Sorry, we could not find anything..</span>
      <router-link to="/" class="block text-xl border b-1 border-on-background rounded-md inline-block px-6 py-2 mt-4 hover:bg-brand hover:text-on-brand hover:border-brand">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
