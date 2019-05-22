<template>
  <transition name='slide'>
    <button v-if='!this.$store.state.menuExpanded' class="menu-toggle" @click="expandMenu">
      <div class="bar" aria-hidden="true"></div>
      <div class="bar" aria-hidden="true"></div>
      <div class="bar" aria-hidden="true"></div>
    </button>
    <nav class='navbar' v-else>
      <div class='links'>
      <nuxt-link to='/' class='nav-link'>Home</nuxt-link>
      <nuxt-link to='/photographs' class='nav-link'>Photographs</nuxt-link>
      <nuxt-link to='/about' class='nav-link'>About</nuxt-link>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      expanded: this.$store.state.menuExpanded
    }
  },
  methods: {
    expandMenu() {
      this.expanded = this.menuStatus
    }
  },
  computed: {
    menuStatus() {
      const status = this.$store.state.menuExpanded
      if(status === false){
        this.$store.commit('expandMenu')
      }
      return !status
    }
  }
}
</script>

<style lang='scss'>
  $primary-blue: hsl(228, 44%, 11%);

  .menu-toggle {
    height: 60px;
    width: 60px;
    box-shadow: 1px 2px 4px 0 $primary-blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: fixed;
    bottom: 15px;
    left: 15px;
    border-radius: 50%;
    background: $primary-blue;
    outline: none;
    border: none;
    // overflow: hidden;

    .bar {
      height: 6px;
      width: 60%;
      margin: 2px 0;
      background: white;
      // box-shadow: 4px -4px 0 1px #cc00FF, -4px 4px 0 1px #00FFFF;
      transition: all 0.4s;
    }

    &:hover {
      // box-shadow: 1px 2px 4px 0 white;

      .bar::before {
        content: "";
        height: 6px;
        width: 100%;
        background: #CC00FF;
        display: block;
        position: relative;
        top: 8px;
        left: -12px;
        opacity: 0;
        animation: toggleHover 0.6s ease-in-out 1 forwards;
      }

      .bar::after {
        content: "";
        height: 6px;
        width: 100%;
        background: #00FFFF;
        display: block;
        position: relative;
        top: -12px;
        left: 12px;
        z-index: -1;
        opacity: 0;
        animation: toggleHover 0.6s ease-in-out 1 forwards;
      }
    }
  }

  .navbar {
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    background: hsl(228, 44%, 11%);
    height: 100vh;
    width: 600px;
    box-shadow: 2px 0 8px 0px #CC00FF;
    justify-content: center;
    z-index: 1000;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    // padding-right: 12px;
    width: 80%;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
    font-weight: 700;
    font-style: italic;
    text-align: center;

    &:hover {
      font-style: normal;
    }
  }

.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100%);
}

@keyframes toggleHover {
  from {
    opacity: 0;
    top: 0;
    left: 0;
  }

  to {
    opacity: 0.6;
  }
}
</style>
