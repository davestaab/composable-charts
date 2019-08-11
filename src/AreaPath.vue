<template>
  <path fill="steelblue" v-bind="$attrs" :d="areaPath"></path>
</template>

<script>
import { area } from 'd3-shape';

export default {
  name: 'AreaPath',
  props: {
    data: Array,
    xScale: Function,
    yScale: Function,
    xAccessor: Function,
    yAccessor: Function
  },
  computed: {
    area() {
      return area()
        .x(d => this.xScale(this.xAccessor(d)))
        .y0(this.yScale(0))
        .y1(d => this.yScale(this.yAccessor(d)));
    },
    areaPath() {
      return this.area(this.data);
    }
  }
};
</script>
