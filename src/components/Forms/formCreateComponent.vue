<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Form Id: {{ formId }}</h1>
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
      try {
        const response = await axios.get(
          `https://msteams.zenya.work/api/cases/reporter_forms/${props.formId}?include_design=true`
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