<template>
  <path stroke="orange" v-bind="$attrs" :d="linePath"></path>
</template>

<script>
import { line } from 'd3-shape';

export default {
  name: 'LinePath',
  props: {
    data: Array,
    xScale: Function,
    yScale: Function,
    xAccessor: Function,
    yAccessor: Function
  },
  computed: {
    line() {
      return line()
        .x(d => this.xScale(this.xAccessor(d)))
        .y(d => this.yScale(this.yAccessor(d)));
    },
    linePath() {
      return this.line(this.data);
    }
  }
};
</script>
