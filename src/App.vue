<template>
  <div id="app">
    <Header/>
      <div class="container">
          <router-view></router-view>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.app {
  min-height: 100rem;
}
.container {
    min-height: 60rem;
}
</style>
