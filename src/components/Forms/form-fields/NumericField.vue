<template>
  <div class="mb-3">
    <label :for="elementId" class="form-label">{{ label }}</label>
    <input 
      type="number" 
      :id="elementId"
      :value="value" 
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

defineProps({
  value: {
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

const emit = defineEmits(['input']);

const onInput = (event: Event) => {
  emit('input', +(event.target as HTMLInputElement).value);
}
</script>
