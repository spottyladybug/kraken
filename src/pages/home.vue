<template>
  <div id="home">
    <router-view></router-view>

    <b-button id="show-btn-reg" @click="showModalRegistration">Зарегистрироваться</b-button>

    <b-button id="show-btn-aut" @click="showModalAutorization">Войти</b-button>
    
    <!-- Регистрация -->
    <b-modal class="ttl-text" ref="reg-modal" hide-footer title="Регистрация">
      <b-container class="d-block text-center">
        <b-row >
          <b-col class="field" lg="12">
           <b-form-input 
           class="type" 
           type="text" 
           placeholder="Имя"
           ></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input 
           class="type" 
           type="text" 
           placeholder="Фамилия"></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input 
           class="type" 
           type="email" 
           placeholder="Email"></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input 
           class="type" 
           type="tel" 
           placeholder="Телефон"></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input 
           class="type" 
           type="password" 
           placeholder="Пароль"></b-form-input>
          </b-col>

          <b-col class="field" lg="12">
           <b-form-input 
           class="type" 
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
    <b-modal class="ttl-text" ref="aut-modal" hide-footer title="Вход">
      <b-container class="d-block text-center">
        <b-row class="my-4">
          <b-col class="field" lg="12">
          <b-form-input 
          class="type" 
          type="email" 
          placeholder="Email"></b-form-input>
          </b-col>
          <b-col class="field" lg="12">
          <b-form-input 
          class="type" 
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
  name: 'Home',
}
</script>
<style scoped>

  .field {
    font-family: Roboto;
  }
  .name-field {
    display: flex;
    align-items: flex-start;
  }

  .success {
    width: 100%;
    height: 57px;
    font-size: 22px;
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

  .type {
    height: 46px; 
    font-size: 16px;
  }



</style>
