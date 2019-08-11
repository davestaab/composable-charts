<template>
  <g>
    <slot :scale="scale"></slot>
  </g>
</template>
<script>
import { extent } from 'd3-array';
import { scaleUtc } from 'd3-scale';

export default {
  name: 'TimeScale',
  props: {
    size: Number,
    data: Array,
    accessor: Function
  },
  computed: {
    scale() {
      return scaleUtc()
        .domain(extent(this.data, this.accessor))
        .range([0, this.size]);
    }
  }
};
</script>
