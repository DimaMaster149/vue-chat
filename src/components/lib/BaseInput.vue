<template>
  <div class="flex flex-col w-full pl-1">
    <label
      class="text-left mb-1"
      @click.prevent.stop="focus()"
      v-if="label"
      v-text="label">
    </label>
    <input ref="input"
      class="border border-cyan-dark outline-none"
      :placeholder="label"
      @input="$emit('input', $event.target.value);"
      :type="type"
      :disabled="disabled"
      :required='required'
      :class="{ error }"
      :value="value"
    >
    <transition name="slide">
      <p v-show="error" class="form__error">{{ error }}</p>
    </transition> 
  </div>
</template>
<script>
export default {
  name: 'text-input',
  methods: {
    focus() {
      this.$refs.input.focus();
    }
  },
  props: {
    disabled: {
      default: false,
      type: Boolean
    },
    type: {
      default: 'text',
      type: String,
    },
    value: {
      required: true,
      type: String
    },
    required: {
      type: String,
      default: 'false'
    },
    label: {
      required: false,
      type: String
    },
    error: {
      type: String,
      required: false
    },
  }
};
</script>