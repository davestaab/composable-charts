<template>
  <g>
    <slot :scale="scale"></slot>
  </g>
</template>
<script>
import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';

export default {
  name: 'LinearScale',
  props: {
    size: Number,
    data: Array,
    accessor: Function
  },
  computed: {
    scale() {
      const scale = scaleLinear()
        .domain([0, max(this.data, this.accessor)])
        .range([this.size, 0]);
      return scale;
    }
  }
};
</script>
