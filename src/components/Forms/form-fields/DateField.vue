<template>
  <div class="mb-3">

    <label :for="elementId" class="form-label">{{ label }}</label>
    <input 
        :id="elementId"
        type="date" 
        :value="value" 
        :required="required" 
        :readonly="readOnly" 
        @input="onInput"
        class="form-control" />
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
    }
  },
  methods: {
    onInput(event) {
      const dateValue = new Date(event.target.value);
      const now = new Date();

      this.$emit('input', event.target.value);
    },
  },
};
</script>
  
<style scoped>
  input[type="date"] {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
  }
  </style>