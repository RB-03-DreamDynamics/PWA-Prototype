<template>
  <div class="mb-3">
    <label for="elementId" class="form-label">{{ label }}</label>
    <textarea 
      :id="elementId"
      :value="value" 
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

defineProps({
    value: {
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
  const emit = defineEmits(['input']);

  const onInput = (event: Event) => {
    emit('input', (event.target as HTMLTextAreaElement).value);
  }
</script>