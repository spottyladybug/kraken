<template>
  <div class="capitan">
    <b-container class="bv-example-row">
        <b-row>
            <b-col sm="12" md="8" lg="8">
                <b-row class="mt-4 mb-4">
                    <b-col cols="12">
                        <h2 class="page_title">Регистрация капитана</h2>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="12" md="6">
                        <b-form-input placeholder="Номер прав" id="type-text" type="text" class="mb-3"></b-form-input>
                        <b-form-select v-model="selected" :options="options" class="mb-3"></b-form-select>
                        <b-row>
                            <b-col cols="12" lg="6" >
                                <h6 class="mb-3">Права капитана</h6>
                                <AddFile/>
                            </b-col>
                            <b-col cols="12" lg="6" >
                                <h6 class="mb-3">Документы</h6>
                                <AddFile/>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col sm="12" md="6">
                        <b-form-textarea
                        class="mb-3"
                        id="textarea"
                        v-model="text"
                        placeholder="Опыт"
                        rows="10"
                        no-resize
                        ></b-form-textarea>
                        <b-button block size="lg">Зарегистрировать</b-button>
                    </b-col>
                </b-row>
            </b-col>
            <b-col sm="12" md="4" lg="4">
                <!-- компонент -->
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import AddFile from '@/components/AddFile.vue'
// import Компонент from '@/components/Компонент.vue'

export default {
  name: 'home',
  data() {
      return {
          selected: null,
          options: [
          { value: null, text: 'Количество матросов' },
          { value: '1', text: '1' },
          { value: '2', text: '2' },
          { value: '3', text: '3' },
          { value: '4', text: '4' }
        ],
        text: '',
      }
  },
  components: {
    AddFile,
    // Компонент
  }
}
</script>

<style scoped>
    .page_title {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 35px;

        color: #000000;
    }
</style>
