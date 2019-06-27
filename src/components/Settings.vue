<template>
  <div class="absolute top-0 right-0">
    <span class="w-10">icon</span>
    <div class="w-32 bg-white" v-show="show">
      <ul class="flex flex-col w-full h-full bg-white">
        <li @click="pickNameColor($event)">Name color</li>
        <li @click="pickTextColor($event)">Text color</li>
        <input class="hidden" v-model="nameColor" ref="nameColorPicker" type="color">
        <input class="hidden" v-model="textColor" ref="textColorPicker" type="color">
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      show: true,
      nameColor: '',
      textColor: ''
    };
  },
  methods: {
    pickTextColor() {
      this.$refs.textColorPicker.click();
    },
    pickNameColor() {
      this.$refs.nameColorPicker.click();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>