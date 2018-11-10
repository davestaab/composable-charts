<template>
  <g>
    <circle v-for="l in displayLayers" :key="l.name" :r="l.displayRadius" :fill="l.color"></circle>
    <slot></slot>
  </g>
</template>

<script>
import { scaleLinear } from 'd3-scale';

export default {
  props: {
    layers: Array,
    size: Number
  },
  data() {
    return {
      scale: scaleLinear()
        .domain([0, 4025])
        .range([0, 200])
    };
  },
  computed: {
    displayLayers() {
      return this.layers.map(l => {
        l.displayRadius = this.scale(l.radius);
        // this is strictly to make the chart reactive when size changes
        // it's required!
        l.size = this.size;
        return l;
      });
    }
  },
  watch: {
    size: {
      immediate: true,
      handler(val) {
        this.scale.range([0, val]);
      }
    }
    // layers: {
    //   immediate: true,
    //   handler(newVal) {
    //     this.scale.domain([0, max(newVal.map(l => l.radius))]);
    //   }
    // }
  }
};
</script>
