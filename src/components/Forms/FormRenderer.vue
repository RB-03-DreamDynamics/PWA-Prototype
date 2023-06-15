<template>
  <div class="container">
    <div v-if="isSubmitSuccess.status" class="alert alert-success" role="alert">
      Form submission successful!
    </div>
    <div class="row">
      <div class="col-12 mb-3">
        <h1>{{ form.title }}</h1>
        <p>Description: {{ form.description }}</p>
        <form @submit="handleSubmit">
          <div v-for="element in form.design.elements" :key="element.element_id">
            <component
              :is="fieldComponent(element.field?.type as 'text' | 'numeric' | 'date' | 'subject_tree' | undefined)"
              v-if="element.element_type === 'field'"
              v-bind="fieldProps(element)"
              :modelValue="element.field?.field_id !== undefined ? data[element.field.field_id] : undefined"
              @update:modelValue="(value: any) => {
                if (element.field?.field_id) {
                  data[element.field.field_id] = value;
                }
              }"
            ></component>
          </div>
          <button class="btn zenya-bg text-white mt-3" type="submit">Verzenden</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive } from 'vue';
import TextField from "./form-fields/TextField.vue";
import NumericField from "./form-fields/NumericField.vue";
import DateField from "./form-fields/DateField.vue";
import SubjectTreeField from "./form-fields/SubjectTreeField.vue";
import ListField from "./form-fields/ListField.vue";

interface Form {
  form_id: number;
  title: string;
  description: string;
  design: {
    elements: FormElement[];
  };
}

interface SubjectTreeDefaultValue {
  subject_id: number;
  name: string;
}

interface ListDefaultValue {
  list_item_id: number;
  name: string;
}

interface FormElement {
  element_id: number;
  element_type: string;
  text: string;
  field?: {
    field_id: number;
    type: string;
    default_value?: string | SubjectTreeDefaultValue | ListDefaultValue[];
    required?: boolean;
    read_only?: boolean;
    min_numeric_value?: number;
    max_numeric_value?: number;
    only_integers?: boolean;
    list_items?: {
      list_item_id: number;
      name: string;
    }[];
  };
}

const isSubmitSuccess = reactive({status: false});


const props = defineProps({
  form: {
    type: Object as () => Form,
    required: true,
  },
  data: {
    type: Object as () => Record<number, any>, // Specify the data type as Record<number, any>
    default: () => ({}),
  },
});

const data = reactive<Record<number, any>>({}); // Specify the type of `data` as Record<number, any>

const fieldComponent = (fieldType: 'text' | 'numeric' | 'date' | 'subject_tree' | 'list' | undefined) => {
  switch (fieldType) {
    case "text":
      return TextField;
    case "numeric":
      return NumericField;
    case "date":
      return DateField;
    case "subject_tree":
      return SubjectTreeField;
    case "list":
      return ListField;
    default:
      return null;
  }
};

// Update the return type of `fieldProps` to include `modelValue` property
const fieldProps = (element: FormElement): { modelValue: any; label: string; elementId: string; required?: boolean; readOnly?: boolean; minValue?: number; maxValue?: number; step?: number; options?: any[] } => {
  switch (element.field?.type) {
    case "text":
      return {
        modelValue: element.field.default_value || '', // Provide a default value for text fields
        label: element.text,
        elementId: 'textField-' + element.element_id,
        required: element.field.required,
        readOnly: element.field.read_only,
      };
    case "numeric":
      return {
        modelValue: element.field.default_value || null, // Provide a default value for numeric fields
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
        modelValue: element.field.default_value || null, // Provide a default value for date fields
        required: element.field.required,
        readOnly: element.field.read_only,
        label: element.text,
        elementId: 'dateField-' + element.element_id,
      };
    case "subject_tree": {
      const subjectTreeDefaultValue = element.field.default_value as SubjectTreeDefaultValue;
      return {
        modelValue: subjectTreeDefaultValue?.subject_id || null, // Provide a default value for subject tree fields
        required: element.field.required,
        readOnly: element.field.read_only,
        label: element.text,
        elementId: 'subjectTreeField-' + element.element_id,
      };
    }
    case "list": {
      const listDefaultValue = element.field.default_value as ListDefaultValue[];
      return {
        modelValue: listDefaultValue?.[0]?.list_item_id || null, // Provide a default value for list fields
        required: element.field.required,
        readOnly: element.field.read_only,
        label: element.text,
        elementId: 'listField-' + element.element_id,
        options: element.field.list_items,
      };
    }

    default:
      return { modelValue: null, label: '', elementId: '' };
  }
};

const handleSubmit = async (event: Event) => {
  event.preventDefault();

  const fields = props.form.design.elements
    .filter((element) => element.element_type === 'field' && element.field)
    .map((element) => {
      let value = data[element.field!.field_id];
      
      // If the field is a date field, convert the value to the 'yyyyMMdd' format
      if (element.field?.type === 'date') {
        value = formatDateToyyyyMMdd(value);
      }

      return {
        field_id: element.field!.field_id,
        value,
      };
    })
    .filter((field) => field.value !== undefined && field.value !== null && field.value !== '');


  console.log('props', props.form.design);
  console.log('form', props.form);
  console.log('fields', fields);

  const request = new Request('https://msteams.zenya.work/api/cases?api-version=3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      form_id: props.form.form_id,
      fields,
    }),
  });

  if (navigator.onLine) {
    try {
      console.log("ONLINE FORM SUBMIT");
      const response = await fetch(request);
      if (!response.ok) {
        // handle error
        console.log('Error:', response);
        console.error('Error:', response.statusText);
      } else {
        // handle success
        const responseData = await response.json();
        console.log('Success:', responseData);
        isSubmitSuccess.status = true;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    console.log("OFFLINE FORM SUBMIT");
    // If offline, store the request in the cache
    caches.open('form-cache').then((cache) => {
      cache.put(request, new Response(JSON.stringify(fields)));
    });

    // Listen for online event
    window.addEventListener('online', async () => {
      try {
        const cache = await caches.open('form-cache');
        const cachedRequests = await cache.keys();

        for (const cachedRequest of cachedRequests) {
          const cachedResponse = await cache.match(cachedRequest);

          if (cachedResponse) {
            const response = await fetch(cachedRequest);
            await cache.delete(cachedRequest);

            if (!response.ok) {
              // handle error
              console.log('Error:', response);
              console.error('Error:', response.statusText);
            } else {
              // handle success
              const responseData = await response.json();
              console.log('Success:', responseData);
            }
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  }
};

const formatDateToyyyyMMdd = (date: string) => {
  if (!date) return '';
  const [year, month, day] = date.split('-');
  if (year && month && day) {
    return year + month + day;
  } else {
    console.error('Invalid date format:', date);
    return '';
  }
};


</script>
