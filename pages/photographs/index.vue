<template>
  <Banner :titles="{headline: 'Photographs'}" />
</template>

<script>
import Banner from '~/components/Banner.vue'
import activeAlbums from '~/content/active-albums/albums.json'
//import('~/content/albums/etest.json').then((data) => {
  // console.log(data.default)
//})

export default {
  components: {
    Banner
  },
  data() {
    return {
      albums: []
    }
  },
  asyncData(context){
    return {
      albums: activeAlbums.albums
    }
  },
  mounted() {
    console.log(activeAlbums.albums)
  }
}
</script>

<style>

</style>
