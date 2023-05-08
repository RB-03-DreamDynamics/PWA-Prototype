<script setup lang="ts">
import FooterComponent from '../components/Layout/footer.vue'
import FormCreateComponent from '../components/Forms/formCreateComponent.vue'
import { useRoute } from 'vue-router';
const route = useRoute();
const formId = route.params.formId as string;
</script>

<template>
  <FormCreateComponent :formId="formId" />
  <FooterComponent />
</template>
