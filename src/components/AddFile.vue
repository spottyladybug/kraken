<template>
  <div id="app">

    <file-pond
        name="test"
        ref="pond"
        label-idle="Добавьте сюда файл..."
        v-bind:allow-multiple="true"
        accepted-file-types="image/jpeg, image/png"
        server="/api"
        v-on:init="handleFilePondInit"/>

  </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from 'vue-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import FilePond plugins
// Please note that you need to install these plugins separately


// Create component
const FilePond = vueFilePond();

export default {
    name: 'AddFile',
    data: function() {
        return { 
        };
    },
    methods: {
        handleFilePondInit() {
        }
    },
    components: {
        FilePond
    }
};
</script>