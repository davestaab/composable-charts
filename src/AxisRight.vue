<template>
  <g v-axis="scale"></g>
</template>

<script>
import { axisRight } from 'd3-axis';
import { select } from 'd3-selection';

function update(el, { value: scale }) {
  axisRight(scale)(select(el));
}
export default {
  name: 'AxisRight',
  props: {
    scale: Function
  },
  directives: {
    axis: {
      inserted: update,
      componentUpdated: update
    }
  }
};
</script>

<style scoped>
.domain {
  stroke: white;
}
.tick line {
  stroke: white;
}
</style>
