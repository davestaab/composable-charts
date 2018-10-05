<template>
  <g>
    <circle v-for="l in layers" :key="l.name" :r="scale(l.radius)" :fill="l.color"></circle>
    <slot></slot>
  </g>
</template>

<script>
import { scaleLinear } from 'd3-scale';

const scale = scaleLinear()
  .domain([0, 4025]) // miles
  .range([0, 200]); // pixels
export default {
  props: {
    layers: Array,
    size: Number
  },
  computed: {
    scale() {
      return scale.range([0, this.size]);
    }
  }
};
</script>

<style>
</style>
