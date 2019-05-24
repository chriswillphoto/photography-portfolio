<template>
  <Banner :titles="{headline: 'Photographs'}" />
</template>

<script>
import Banner from '~/components/Banner.vue'
import test from '~/content/albums/etest.json'

console.log(test)

export default {
  components: {
    Banner
  }
}
</script>

<style>

</style>
