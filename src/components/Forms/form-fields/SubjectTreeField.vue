<!-- SubjectTreeField.vue -->
<template>
  <div>
    <label :for="elementId">{{ label }}</label>
    <select :id="elementId" :value="value" @input="$emit('input', $event?.target?.value as HTMLInputElement)">
      <!-- Here you would render <option> elements based on the hierarchical data -->
    </select>
  </div>
</template>

<script lang="ts">
export default {
  props: {
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
  },
};
</script>

<style scoped>
select {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
}
</style>
