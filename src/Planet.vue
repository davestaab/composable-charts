<template>
  <g>
    <circle
      v-for="l in layers"
      :key="l.name"
      :r="scale(l.radius)"
      :fill="l.color"
    ></circle>
    <slot></slot>
  </g>
</template>

<script>
export default {
  props: {
    layers: Array,
    scale: Function
  }
};
</script>
