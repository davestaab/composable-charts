<template>
  <g>
    <circle v-for="l in layers" :key="l.name" :r="scale(l.radius)" :fill="l.color"></circle>
    <slot></slot>
  </g>
</template>

<script>
import { scaleLinear } from 'd3-scale';
const scale = scaleLinear()
  .domain([0, 4025])
  .range([0, 200]);

export default {
  props: ['layers'],
  data() {
    return {
      scale
    };
  }
};
</script>

<style>
</style>
