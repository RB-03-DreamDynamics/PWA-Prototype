<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>{{ form.title }}</h1>
        <p>Description: {{ form.description }}</p>
        <div v-for="element in form.design.elements as FormElement[]" :key="element.element_id">
          <component :is="fieldComponent(element.field?.type)" v-if="element.element_type === 'field'" :field="element.field" :label="element.text"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextField from "./form-fields/TextField.vue";
import NumericField from "./form-fields/NumericField.vue";
import DateField from "./form-fields/DateField.vue";
// Import other field components as needed

export default defineComponent({
  name: "FormRenderer",
  components: {
    TextField,
    NumericField,
    DateField,
    // Add other field components as needed
  },
  props: {
  form: {
    type: Object,
    required: true,
  },
  data: {
    type: Object,
    default: () => ({}),
  },
},

setup(props) {
  const fieldComponent = (fieldType) => {
    switch (fieldType) {
      case "text":
        return "TextField";
      case "numeric":
        return "NumericField";
      case "date":
        return "DateField";
      // Add other field types as needed
      default:
        return null;
    }
  };

  return {
    fieldComponent
  };
},

});
interface FormElement {
  element_id: number;
  element_type: string;
  text: string;
  field?: {
    field_id: number;
    type: string;
  };
}

</script>
