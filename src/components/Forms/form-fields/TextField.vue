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

<script lang="ts">
export default {
  props: {
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
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>