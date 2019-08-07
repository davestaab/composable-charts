<template>
  <g>
    <circle
      v-for="l in displayLayers"
      :key="l.name"
      :r="l.displayRadius"
      :fill="l.color"
    ></circle>
    <slot></slot>
  </g>
</template>

<script>
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

export default {
  props: {
    layers: Array,
    size: Number
  },
  data() {
    return {
      scale: scaleLinear()
    };
  },
  computed: {
    displayLayers() {
      return this.layers.map(l => {
        l.displayRadius = this.computedScale(l.radius);
        return l;
      });
    },
    computedScale() {
      return this.scale
        .domain([0, max(this.layers.map(d => d.radius))]) // miles
        .range([0, this.size / 2]);
    }
  }
};
</script>
