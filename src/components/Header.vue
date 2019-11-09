<template>
<div class="header">
    <b-nav tabs align="flex-end">
        <b-nav-item style="margin-right: 54px" @click="showModal(true)">Войти</b-nav-item>
        <LoginModal ref="login"/>
        <b-nav-item style="margin-right: 10em" @click="showModal(false)">Регистрация</b-nav-item>
        <RegModal ref="reg"/>
    </b-nav>
</div>
</template>
<script>
import RegModal from 'src/components/RegModal'
import LoginModal from 'src/components/LoginModal'
export default {
  name: "Header",
  components: {
      RegModal,
      LoginModal,
  },
  data() {
    return {
      isRegModal: false,
      isLoginModal: false,
    }
  },
  methods: {
      showModal(modal) {
          if (modal) {
              this.$refs['login'].showModalAutorization();
          } else {
              this.$refs['reg'].showModalRegistration();
          }
          
      }
  }
};
</script>
<style scoped>
.header {
    display: flex;
    width:100%;
    justify-content: flex-end;
    align-items: flex-end;
    background: #C4C4C4;
}
.nav {
    height: 80px;
    text-align: center;
    align-content: center;
}
.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
    border: none;
}
a, a:hover {
    color: #000000;
}
</style>