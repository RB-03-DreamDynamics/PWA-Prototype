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

<script lang="ts">
export default {
  props: {
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
  },
  methods: {
    onInput(event) {
      this.$emit('input', +event.target.value);
    },
  },
};
</script>
