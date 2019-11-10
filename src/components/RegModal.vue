<template>
    <!-- Регистрация -->
    <b-modal ref="reg-modal" hide-footer title="Регистрация">
      <b-container class="d-block text-center">
        <b-row class="my-4">
          <b-col class="field" lg="12">
           <b-form-input 
           v-model="first_name"
           class="type-text" 
           type="text" 
           placeholder="Имя"
           ></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input 
           v-model="last_name"
           class="type-text" 
           type="text" 
           placeholder="Фамилия"></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input
           v-model="email"
           class="type-email" 
           type="email" 
           placeholder="Email"></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input
           v-model="phone"
           class="type-tel" 
           type="tel" 
           placeholder="Телефон"></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input
           class="type-password" 
           type="password" 
           placeholder="Пароль"></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input
           v-model="password"
           class="type-password" 
           type="password" 
           placeholder="Проверка пароля"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="12">
            <b-button class="success" variant="success" @click="register">Готово</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
</template>

<script>
import {REGISTER_REQUEST} from 'src/store/actions/auth'
export default {
  name: "RegModal",
  data() {
    return {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      phone: '',
    }
  },
  methods: {
    showModalRegistration() {
      this.$refs['reg-modal'].show();
    },
    hideModalRegistration() {
        this.$refs['reg-modal'].hide()
    },
    register() {
      const {email, password, first_name, last_name, phone} = this;
        this.$store.dispatch(REGISTER_REQUEST, {email, password, first_name, last_name, phone}).then(() => {
          this.hideModalRegistration();
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