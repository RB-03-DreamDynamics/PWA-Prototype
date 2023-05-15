<template>
  <div>
    <label :for="elementId">{{ label }}</label>
    <select :id="elementId" :value="value" @input="$emit('input', $event.target as HTMLSelectElement)">
      <option v-for="option in options" :key="option.subject_id" :value="option.subject_id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface OptionType {
  subject_id: number;
  name: string;
}

defineProps({
  value: {
    type: Object,
    default: () => ({}),
  },
  label: {
    type: String,
    default: '',
  },
  elementId: {
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
  options: {
    type: Array as () => OptionType[],
    default: () => ([]),
  },
});
</script>

<style scoped>
select {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
}
</style>
