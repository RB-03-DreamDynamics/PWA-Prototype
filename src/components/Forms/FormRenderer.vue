<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>{{ form.title }}</h1>
        <p>Description: {{ form.description }}</p>
        <div v-for="element in form.design.elements as FormElement[]" :key="element.element_id">
           <component 
            :is="fieldComponent(element.field?.type)" 
            v-if="element.element_type === 'field'"
            v-bind="fieldProps(element)"
            @input="handleInput"
          ></component>
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
import SubjectTreeField from "./form-fields/SubjectTreeField.vue";
// Import other field components as needed

interface FormElement {
  element_id: number;
  element_type: string;
  text: string;
  field?: {
    field_id: number;
    type: string;
  };
}

export default defineComponent({
  name: "FormRenderer",
  components: {
    TextField,
    NumericField,
    DateField,
    SubjectTreeField,
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
      case "subject_tree":
        return "SubjectTreeField";
      // Add other field types as needed
      default:
        return null;
    }
  };

  const fieldProps = (element) => {
    switch (element.field?.type) {
      case "text":
        return {
          value: element.field.default_value,
          label: element.text,
          elementId: 'textField-' + element.element_id,
          required: element.field.required,
          readOnly: element.field.read_only,
        };
      case "numeric":
        return {
          value: element.field.default_value,
          minValue: element.field.min_numeric_value,
          maxValue: element.field.max_numeric_value,
          step: element.field.only_integers ? 1 : 0.1,
          required: element.field.required,
          readOnly: element.field.read_only,
          label: element.text,
          elementId: 'numericField-' + element.element_id,
        };
      case "date":
        return {
          value: element.field.default_value,
          required: element.field.required,
          readOnly: element.field.read_only,
          label: element.text,
          elementId: 'dateField-' + element.element_id,
        };
      case "subject_tree":
        return {
          value: element.field.default_value,
          required: element.field.required,
          readOnly: element.field.read_only,
          label: element.text,
          elementId: 'subjectTreeField-' + element.element_id,
        };
      default:
        return {};
      }
    };

  return {
    fieldComponent,
    fieldProps
  };
},

});

</script>
