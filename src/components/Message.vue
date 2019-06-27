<template>
  <div class="flex flex-row">
    {{messageInfo.user}}: {{messageInfo.message}}
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
