<template>
  <div class="flex flex-row w-full">
    <div class="w-1/5 max-w-20 px-2">
      {{messageInfo.user}}
    </div>
    <div class="w-4/5">
      {{messageInfo.message}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    messageInfo: {
      type: Object,
      required: true
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
