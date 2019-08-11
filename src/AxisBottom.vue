<template>
  <g v-axis="{ scale, width }"></g>
</template>

<script>
import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';

function update(el, { value }) {
  const { scale, width } = value;
  axisBottom(scale)
    .ticks(width / 80)
    .tickSizeOuter(0)(select(el));
}

export default {
  name: 'AxisBottom',
  props: {
    scale: Function,
    width: Number
  },
  directives: {
    axis: {
      inserted: update,
      componentUpdated: update
    }
  }
};
</script>
