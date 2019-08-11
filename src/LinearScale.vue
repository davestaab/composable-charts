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
    accessor: Function,
    reverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    scale() {
      return scaleLinear()
        .domain([0, max(this.data, this.accessor)])
        .range(this.reverse ? [this.size, 0] : [0, this.size]);
    }
  }
};
</script>
