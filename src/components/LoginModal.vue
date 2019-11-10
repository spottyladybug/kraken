<template>
    <!-- Авторизация -->
    <b-modal ref="aut-modal" hide-footer title="Вход">
      <b-container class="d-block text-center">
        <b-row class="my-4">
          <b-col class="field" lg="12">
          <b-form-input 
          v-model="email"
          class="type-email" 
          type="email" 
          placeholder="Email"></b-form-input>
          </b-col>
          <b-col class="field" lg="12">
          <b-form-input 
          v-model="password"
          class="type-password" 
          type="password" 
          placeholder="Пароль"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="12">
            <b-button class="success" variant="primary" @click="login">Вход</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
</template>

<script>
import {AUTH_REQUEST} from 'src/store/actions/auth'
export default {
  name: "LoginModal",
  data() {
    return {
        email: '',
        password: '',
    }
  },
  methods: {
      showModalAutorization() {
      this.$refs['aut-modal'].show();
    },

    hideModalAutorization() {
      this.$refs['aut-modal'].hide()
    },
    login() {
      const {email, password} = this;
        this.$store.dispatch(AUTH_REQUEST, {email, password}).then(() => {
        this.hideModalAutorization();
          return this.$router.push({ name: 'profile' })
        })
    }
  }
}
</script>

<style scoped>
  .name-field {
    display: flex;
    align-items: flex-start;
  }

  .success {
    width: 100%;
  }

  #show-btn-reg {
    margin: 0 5px 0 5px;
  }

  #show-btn-aut {
    margin: 0 5px 0 5px;
  }

  .field {
    margin: 0 0 14px 0;
  }

  .type-text {
    height: 46px;
    color: #000;
  }

  .type-email {
    height: 46px;
    color: #000;
  } 

  .type-tel {
    height: 46px;
    color: #000;
  } 

  .type-password {
    height: 46px;
    color: #000;
  }



</style>