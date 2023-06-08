<template>
  <div class="mb-3">
    <label :for="elementId" class="form-label">{{ label }}</label>
    <textarea 
      :id="elementId"
      :value="modelValue" 
      :required="required" 
      :readonly="readOnly" 
      :rows="textLines" 
      @input="onInput" 
      class="form-control"
    />
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
    label: {
      type: String,
      default: '',
    },
    elementId: {
      type: String,
      required: true
    },
    textLines: {
      type: Number,
      default: 1,
    }
  });
  
  const emit = defineEmits(['update:modelValue']);

  const onInput = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLTextAreaElement).value);
  }
</script>
