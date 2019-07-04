<template>
  <div class="flex flex-col w-full">
    <label
      class="text-left mb-1"
      @click.prevent.stop="focus()"
      v-if="label"
      v-text="label">
    </label>
    <input ref="input"
      class="pl-1 border border-cyan-dark outline-none"
      :class="{'border-orange-dark': !!error}"
      :placeholder="label"
      @input="$emit('input', $event.target.value);"
      @blur="$emit('blur')"
      :type="type"
      :disabled="disabled"
      :required='required'
      :value="value"
      :minlength="min"
      :maxlength="max"
    >
    <transition name="slide">
      <p v-show="error" class="pt-1 text-5 text-orange-dark text-left">{{ error }}</p>
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
    min: {
      type: [String, Number],
      required: false
    },
    max: {
      type: [String, Number],
      required: false
    }
  }
};
</script>