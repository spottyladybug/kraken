<template>
    <div class="profile">
  <b-card no-body 
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-left
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-title>{{userName}}</b-card-title>
      <b-card-sub-title class="mb-2">{{phoneNumber}}</b-card-sub-title>
  </b-card>
</div>
</template>
<script>
export default {
    name: 'Profile',
    data(){
        return{
            userName: "Max Flores",
            phoneNumber: "8 (406) 555-0120"
        }
    }
}
</script>
<style scoped>
.profile {
    width: 350px;
    height: 531px;
    background: #F4F4F4;
    border-radius: 15px;
}
</style>