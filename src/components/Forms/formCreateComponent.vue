<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'FormCreateComponent',
  props: {
    formId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const form = ref(null);

    const fetchForm = async () => {
      try {
        const response = await axios.get(
          `{{baseUrl}}/cases/reporter_forms/${props.formId}?include_design=true`
        );
        form.value = response.data;
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

<template>
    <div class="container">
        <div class="row">
        <div class="col-12">
            <h1>{{ formId }}</h1>
        </div>
        </div>
    </div>
</template>