<template>
  <div id="home">
      This is Home
      <Profile/>
  </div>
</template>

<script>
import Profile from 'src/components/Profile';
export default {
  name: 'Home',
  components: {
      Profile
  }
}
</script>
