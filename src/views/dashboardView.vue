<script setup lang="ts">
import FooterComponent from '../components/Layout/FooterComponent.vue'
import FormsListComponent from '../components/Forms/formsListComponent.vue'
import HeaderComponent from '../components/Layout/HeaderComponent.vue';

console.log(localStorage.getItem('token'))
</script>

<template>
    <HeaderComponent />
    <FormsListComponent class="header-clearer" />
    <FooterComponent />
</template>