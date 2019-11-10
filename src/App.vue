<template>
  <div id="app">
    <Header/>
      <div class="content">
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
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
/*.app {
  min-height: 100rem;
}
.content {
    min-height: 100%;
}*/

.content{
  background: #F6F6F6;
}
</style>
