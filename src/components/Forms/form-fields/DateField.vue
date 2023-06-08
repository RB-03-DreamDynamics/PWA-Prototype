<template>
  <div class="mb-3">
    <label :for="elementId" class="form-label">{{ label }}</label>
    <input 
        :id="elementId"
        type="date" 
        :value="formattedDate" 
        :required="required" 
        :readonly="readOnly" 
        @input="onInput"
        class="form-control" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
  allowFutureDates: {
    type: Boolean,
    default: true,
  },
  allowPastDates: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: '',
  },
  elementId: {
    type: String,
    required: true
  },
});

const emit = defineEmits(["update:modelValue"]);

// Convert modelValue to the format expected by the date input
const formattedDate = ref(props.modelValue.slice(0,4) + '-' + props.modelValue.slice(4,6) + '-' + props.modelValue.slice(6,8));

// Update formattedDate whenever modelValue changes
watch(props, (newProps) => {
  formattedDate.value = newProps.modelValue ? (newProps.modelValue.slice(0,4) + '-' + newProps.modelValue.slice(4,6) + '-' + newProps.modelValue.slice(6,8)) : '';
});

const onInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  // Only update modelValue if inputValue is in the correct format
  if (/^\d{4}-\d{2}-\d{2}$/.test(inputValue)) {
    const formattedInputValue = inputValue.replace(/-/g, '');
    emit('update:modelValue', formattedInputValue);
  }
}

</script>
  
<style scoped>
  input[type="date"] {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
  }
</style>
