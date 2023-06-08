<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>{{ form.title }}</h1>
        <p>Description: {{ form.description }}</p>
        <form @submit="handleSubmit">
          <div v-for="element in form.design.elements" :key="element.element_id">
             <component 
              :is="fieldComponent(element.field?.type as 'text' | 'numeric' | 'date' | 'subject_tree' | undefined)" 
              v-if="element.element_type === 'field'"
              v-bind="fieldProps(element)"
              :modelValue="data[element.field?.field_id]"
              @update:modelValue="value => data[element.field?.field_id] = value"

            ></component>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive } from 'vue'
import TextField from "./form-fields/TextField.vue";
import NumericField from "./form-fields/NumericField.vue";
import DateField from "./form-fields/DateField.vue";
import SubjectTreeField from "./form-fields/SubjectTreeField.vue";

interface Form {
  form_id: number;
  title: string;
  description: string;
  design: {
    elements: FormElement[];
  };
}

interface FormElement {
  element_id: number;
  element_type: string;
  text: string;
  field?: {
    field_id: number;
    type: string;
    default_value?: string;
    required?: boolean;
    read_only?: boolean;
    min_numeric_value?: number;
    max_numeric_value?: number;
    only_integers?: boolean;
  };
}
const props = defineProps({
  form: {
    type: Object as () => Form,
    required: true,
  },
  data: {
    type: Object,
    default: () => ({}),
  },
});

const data = reactive({});

const fieldComponent = (fieldType: 'text' | 'numeric' | 'date' | 'subject_tree' | undefined) => {
  switch (fieldType) {
    case "text":
      return TextField;
    case "numeric":
      return NumericField;
    case "date":
      return DateField;
    case "subject_tree":
      return SubjectTreeField;
    default:
      return null;
  }
};


const fieldProps = (element: FormElement) => {
  switch (element.field?.type) {
    case "text":
      return {
        modelValue: element.field.default_value,
        label: element.text,
        elementId: 'textField-' + element.element_id,
        required: element.field.required,
        readOnly: element.field.read_only,
      };
    case "numeric":
      return {
        modelValue: element.field.default_value,
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
        modelValue: element.field.default_value,
        required: element.field.required,
        readOnly: element.field.read_only,
        label: element.text,
        elementId: 'dateField-' + element.element_id,
      };
    case "subject_tree":
      return {
        modelValue: element.field.default_value,
        required: element.field.required,
        readOnly: element.field.read_only,
        label: element.text,
        elementId: 'subjectTreeField-' + element.element_id,
      };
    default:
      return {};
    }
};

const handleSubmit = async (event: Event) => {
  event.preventDefault();

  const fields = props.form.design.elements
    .filter((element) => element.element_type === 'field' && element.field)
    .map((element) => ({
      field_id: element.field!.field_id,
      field_name: element.text,
      value: data[element.field!.field_id],

    }));

    console.log("props", props.form.design)
    console.log("form", props.form)

    console.log("fields", fields)

  const response = await fetch('https://msteams.zenya.work/api/cases', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Version': '3',
    },
    body: JSON.stringify({
      form_id: props.form.form_id,
      fields,
    }),
  });

  console.log("checking response")
  if (!response.ok) {
    // handle error
    console.log('Error:', response);
    console.error('Error:', response.statusText);
  } else {
    // handle success
    const responseData = await response.json();
    console.log('Success:', responseData);
  }
};
</script>
