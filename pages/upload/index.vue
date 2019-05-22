<template>
  <div v-html='test'></div>
</template>

<script>
import cloudinary from 'cloudinary-core'
var cloud = new cloudinary.Cloudinary({cloud_name: 'dz7d2ezqb', secure: true, upload_preset: 'klw2fci1'})

export default {
  data() {
    return {
      test: cloud.imageTag('jesse-schoff-1603596-unsplash_qv9fag').toHtml()
    }
  }
}
</script>

<style>

</style>
