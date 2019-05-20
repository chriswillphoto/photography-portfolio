<template>
  <div class="homepage-container">
    <Banner image='https://res.cloudinary.com/dz7d2ezqb/image/upload/c_scale,q_81,w_1800/v1558329351/jesse-schoff-1603596-unsplash_qv9fag.jpg' :titles="{headline: 'Most Excellent',}"/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Logo,
    Banner
  }
}
</script>

<style>


.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
