<template>
  <header class="banner" :style='{backgroundImage: `url(${image})`}'>
    <h1 class='headline'>{{titles.headline}}</h1>
  </header>
</template>

<script>
export default {
  props: ['image', 'titles']
}
</script>

<style lang='scss'>
  .banner {
    width: 100%;
    height: 60vh;
    background-size: 120% 120%;
    background-position: 0 0;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
    animation: slowSlide 40s linear infinite alternate;

    .headline {
      font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
      z-index: 20;
    }
    
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(0,0,0,0.3);
      z-index: 1;
    }

  }

  @keyframes slowSlide {
    from {
      background-position: 0 center;
      background-size: 105% 105%;
    }

    to {
      background-position: 100% center;
      background-size: 120% 120%;
    }
  }
</style>
