<template>
  <div id="home">
    <router-view></router-view>

    <b-button id="show-btn" @click="showModalRegistration">Зарегистрироваться</b-button>

    <b-button id="show-btn" @click="showModalAutorization">Войти</b-button>
    
    <!-- Регистрация -->
    <b-modal ref="reg-modal" hide-footer title="Регистрация">
      <b-container class="d-block text-center">
        <b-row class="my-4" v-for="text in texts" :key="text">
          <b-col class="name-field" lg="12">
            <label :for="`type-${type}`">Введите {{ text }}:</label>
          </b-col>
          <b-col lg="12">
           <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-button class="success" variant="success">Готово</b-button>
          </b-col>
        </b-row>
      </b-container>
      
    </b-modal>

    <!-- Авторизация -->
    <b-modal ref="aut-modal" hide-footer title="Вход">
      <b-container class="d-block text-center">
        <b-row class="my-4" v-for="name in names" :key="name">
          <b-col class="name-field" lg="12">
            <label :for="`type-${category}`">{{ name }}:</label>
          </b-col>
          <b-col lg="12">
           <b-form-input :id="`type-${category}`" :type="category"></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
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
      texts: [
        'имя',
        'фамилию',
        'email',
        'пароль',
        'пароль повторно',
        'телефон',
      ],

      types: [
        'text',
        'text',
        'email',
        'password',
        'password',
        'tel'
      ],
      names: [
        'Еmail',
        'Пароль',
      ],

      categories: [
        'email',
        'password',
      ]
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

<style>
  .name-field {
    display: flex;
    align-items: flex-start;
  }

  .success {
    width: 150px;
  }
</style>