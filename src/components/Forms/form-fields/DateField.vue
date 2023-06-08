<template>
  <div class="mb-3">
    <label :for="elementId" class="form-label">{{ label }}</label>
    <input 
        :id="elementId"
        type="date" 
        :value="modelValue" 
        :required="required" 
        :readonly="readOnly" 
        @input="onInput"
        class="form-control" />
  </div>
</template>

<script setup lang="ts">
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

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
}
</script>
  
<style scoped>
  input[type="date"] {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
  }
</style>
