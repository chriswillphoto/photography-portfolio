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
  async asyncData({ $axios, params, env, store }){

    if(!store.state.albums.albumData){
      let albumArray = []
      await activeAlbums.albums.forEach(album => {

        import(`~/content/albums/${album.toLowerCase().replace(' ', '-')}.json`).then((data) => {
          let fetchedAlbum = {title: album, images: data.images}
          albumArray.push(fetchedAlbum)
        })

      });
      console.log('ran')
      store.commit('loadAlbums', albumArray)
    }
  },
  mounted() {
    console.log(activeAlbums.albums)
  }
}
</script>

<style>

</style>
