<template>
  <g v-axis="scale"></g>
</template>

<script>
import { axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

function update(el, { value: scale }) {
  axisLeft(scale)(select(el));
}
export default {
  name: 'AxisLeft',
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
