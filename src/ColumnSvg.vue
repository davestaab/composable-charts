<template>
  <svg width="500" :height="size" class="space">
    <g transform="translate(250, 100)">
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
    }
  }
};
</script>
