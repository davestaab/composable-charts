<template>
  <g v-axis="scale" :transform="transform"></g>
</template>

<script>
import { axisRight, select } from 'd3';

export default {
  props: {
    scale: Function,
    size: Number,
    margin: {
      type: Number,
      default: 10
    }
  },
  computed: {
    transform() {
      return `translate(${(-1 * this.size) / 2 + this.margin}, 0)`;
    }
  },
  directives: {
    axis: {
      bind(el, { value }) {
        const axis = axisRight(value);
        axis.ticks(10, ',d');
        axis(select(el));
      }
    }
  }
};
</script>

<style>
.domain {
  stroke: white;
}
.tick line {
  stroke: white;
}
</style>
