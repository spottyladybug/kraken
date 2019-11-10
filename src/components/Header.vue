<template>
<div class="header">
    <b-nav tabs align="flex-end">
        <b-nav-item v-if="!isAuthenticated" style="margin-right: 54px" @click="showModal(true)">Войти</b-nav-item>
        <LoginModal ref="login"/>
        <b-nav-item v-if="!isAuthenticated" style="margin-right: 10em" @click="showModal(false)">Регистрация</b-nav-item>
        <RegModal ref="reg"/>
        <b-nav-item v-if="isAuthenticated" style="margin-right: 10em" @click="logout">
            Выход
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M13.4552 24.7127H3.36377C2.74482 24.7127 2.24253 24.2103 2.24253 23.5914V3.40865C2.24253 2.78971 2.74488 2.28741 3.36377 2.28741H13.4552C14.0752 2.28741 14.5764 1.78622 14.5764 1.16617C14.5764 0.546123 14.0752 0.0448303 13.4552 0.0448303H3.36377C1.50921 0.0448303 0 1.55409 0 3.40865V23.5914C0 25.4459 1.50921 26.9551 3.36377 26.9551H13.4552C14.0752 26.9551 14.5764 26.4539 14.5764 25.8339C14.5764 25.2138 14.0752 24.7127 13.4552 24.7127Z" fill="white"/>
<path d="M26.666 12.7017L19.8487 5.97408C19.4091 5.53902 18.6983 5.54466 18.2632 5.98531C17.8282 6.42596 17.8326 7.13571 18.2745 7.57077L23.1463 12.3787H10.0915C9.4714 12.3787 8.97021 12.8799 8.97021 13.5C8.97021 14.12 9.4714 14.6213 10.0915 14.6213H23.1463L18.2745 19.4292C17.8327 19.8643 17.8293 20.574 18.2632 21.0147C18.483 21.2367 18.7723 21.3488 19.0616 21.3488C19.3464 21.3488 19.6312 21.2412 19.8487 21.0258L26.666 14.2983C26.879 14.0875 27.0001 13.8004 27.0001 13.4999C27.0001 13.1995 26.8801 12.9136 26.666 12.7017Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="27" height="27" fill="white"/>
</clipPath>
</defs>
</svg>
        </b-nav-item>
    </b-nav>
</div>
</template>
<script>
import RegModal from 'src/components/RegModal'
import LoginModal from 'src/components/LoginModal'
import { mapGetters } from "vuex";
import { AUTH_LOGOUT } from "src/store/actions/auth";
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
    computed: {
    ...mapGetters([
      "isAuthenticated"
    ]),
  },
  methods: {
     logout: function() {
        this.$store
            .commit(AUTH_LOGOUT)
            .then(() => this.$router.push({ name: "login" }));
    },
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
    background: #17A4D2;
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
    color: #FBFBFB;
}
</style>