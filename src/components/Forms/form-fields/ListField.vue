<template>
  <div>
    <label :for="elementId">{{ label }}</label>
    <select class="form-select" v-model="localModelValue" @change="onInput($event)">
      <option disabled value="">Please select one</option>
      <option v-for="item in options" :key="item.list_item_id" :value="item.list_item_id">{{ item.name }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue'

interface OptionType {
  list_item_id: number;
  name: string;
}

const props = defineProps({
  modelValue: {
    type: Number,
    default: undefined,
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

let localModelValue = ref(props.modelValue);
watch(() => props.modelValue, (newVal) => {
  localModelValue.value = newVal;
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (event: Event) => {
  emit('update:modelValue', parseInt((event.target as HTMLSelectElement).value));
}
</script>

<style scoped>
select {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
}
</style>