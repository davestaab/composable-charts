<template>
  <svg :width="this.width" :height="size+20*2" class="space">
    <g transform="translate(250, 20)">
      <slot></slot>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 3200
    },
    width: {
      type: Number,
      default: 500
    }
  }
};
</script>
