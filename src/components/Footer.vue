<template>
<div class="footer">
    <b-nav tabs align="center">
        <b-nav-item>Контакты</b-nav-item>
        <b-nav-item>Дополнительная инфрмация</b-nav-item>
        <b-nav-item>Ссылки</b-nav-item>
    </b-nav>
</div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style scoped>
.footer {
    display: flex;
    width:100%;
    justify-content: center;
    background: #C4C4C4;
}
.nav {
    height: 95px;
    text-align: center;
    align-content: center;
}
.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
    border: none;
}
a, a:hover {
    color: #000000;
}
</style>