<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p>Form Id: {{ formId }}</p>
      </div>
    </div>
    <div v-if="form">
      <form-renderer :form=form />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import FormRenderer from "./FormRenderer.vue";



export default defineComponent({
  name: "FormCreateComponent",
  components: {
    FormRenderer,
  },
  props: {
    formId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const form = ref(null);
    const fetchForm = async () => {
      const apiUrl = `https://msteams.zenya.work/api/cases/reporter_forms/2220?include_design=true`;
      const request = new Request(apiUrl);



      try {
        const cache = await caches.open("form-cache");
        const cachedResponse = await cache.match(request);



        if (cachedResponse) {
          // Response found in cache, use it
          const data = await cachedResponse.json();
          form.value = data;
        } else {
          // No response found in cache, fetch it from network
          const response = await fetch(request);
          const clonedResponse = response.clone();
          const data = await response.json();

          // Store the fetched response in the cache for future use
          await cache.put(request, clonedResponse);
          form.value = data;
        }
      } catch (error) {
        console.error(error);
      }
    };



    onMounted(() => {
      fetchForm();
    });



    return {
      form,
    };
  },
});
</script>