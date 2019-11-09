<template>
<div class="header">
    <b-nav tabs align="flex-end">
        <b-nav-item style="margin-right: 54px">Войти</b-nav-item>
        <b-nav-item style="margin-right: 10em">Регистрация</b-nav-item>
    </b-nav>
</div>
</template>
<script>
export default {
  name: "Header"
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
a {
    color: #000000;
}
</style>