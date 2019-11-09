<template>
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
</template>

<script>
export default {
  name: "RegModal",
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