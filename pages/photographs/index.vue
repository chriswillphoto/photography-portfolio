<template>
  <Banner :titles="{headline: 'Photographs'}" />
</template>

<script>
import Banner from '~/components/Banner.vue'
import activeAlbums from '~/content/active-albums/tests.json'
import('~/content/albums/etest.json').then((data) => {
  console.log(data.default)
})

export default {
  components: {
    Banner
  },
  data() {
    return {
      albums: []
    }
  },
  aSyncData(context){

  }
}
</script>

<style>

</style>
