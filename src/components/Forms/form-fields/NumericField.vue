<template>
  <div class="mb-3">
    <label :for="elementId" class="form-label">{{ label }}</label>
    <input 
      type="number" 
      :id="elementId"
      :value="modelValue" 
      :min="minValue"
      :max="maxValue"
      :step="step"
      :required="required"
      :readonly="readOnly"
      @input="onInput" 
      class="form-control"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  minValue: {
    type: Number,
    default: null,
  },
  maxValue: {
    type: Number,
    default: null,
  },
  step: {
    type: Number,
    default: 1,
  },
  required: {
    type: Boolean,
    default: false,
  },
  readOnly: {
    type: Boolean,
    default: false,
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

const emit = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
  emit('update:modelValue', +(event.target as HTMLInputElement).value);
}
</script>
