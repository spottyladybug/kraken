<template>
  <div id="home">
    <router-view></router-view>

    <b-button id="show-btn-reg" @click="showModalRegistration">Зарегистрироваться</b-button>

    <b-button id="show-btn-aut" @click="showModalAutorization">Войти</b-button>
    
    <!-- Регистрация -->
    <b-modal ref="reg-modal" hide-footer title="Регистрация">
      <b-container class="d-block text-center">
        <b-row class="my-4">
          <b-col class="field" lg="12">
           <b-form-input 
           class="type-text" 
           type="text" 
           placeholder="Имя"
           ></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input 
           class="type-text" 
           type="text" 
           placeholder="Фамилия"></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input 
           class="type-email" 
           type="email" 
           placeholder="Email"></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input 
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
           class="type-password" 
           type="password" 
           placeholder="Проверка пароля"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="12">
            <b-button class="success" variant="success">Готово</b-button>
          </b-col>
        </b-row>
      </b-container>
      
    </b-modal>

    <!-- Авторизация -->
    <b-modal ref="aut-modal" hide-footer title="Вход">
      <b-container class="d-block text-center">
        <b-row class="my-4">
          <b-col class="field" lg="12">
          <b-form-input 
          class="type-email" 
          type="email" 
          placeholder="Email"></b-form-input>
          </b-col>
          <b-col class="field" lg="12">
          <b-form-input 
          class="type-password" 
          type="password" 
          placeholder="Пароль"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="12">
            <b-button class="success" variant="primary">Вход</b-button>
          </b-col>
        </b-row>
      </b-container>
      
    </b-modal>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },

  methods: {
    showModalRegistration() {
      this.$refs['reg-modal'].show();
    },
    hideModalRegistration() {
        this.$refs['reg-modal'].hide()
    },

    showModalAutorization() {
      this.$refs['aut-modal'].show();
    },

    hideModalAutorization() {
      this.$refs['aut-modal'].hide()
    },
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