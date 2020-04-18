<template>
  <div
    class="cherry"
    :style="{'background-color': isAvailable ? hue.hex : ''}"
    :class="{'dashed' : !isAvailable}"
  >

  </div>
</template>

<script>
export default {
  props: ['hue', 'available'],
  data () {
    return {

    }
  },
  computed: {
    isAvailable () {
      return this.available;
    }
  }
}
</script>

<style lang="scss" scoped>
.cherry {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.dashed {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='white' stroke-width='3' stroke-dasharray='6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 100px;
  background-color: transparent !important;
}
</style>