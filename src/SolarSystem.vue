<template>
    <g>
        <g v-for="p in planets" :key="p.name" :transform="translate(p)">
            <slot :planet="p"></slot>
        </g>
    </g>
</template>

<script>
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

const scale = scaleLinear()
  .domain([0, 0]) // miles
  .range([0, 3200]); // pixels

export default {
  props: {
    planets: Array,
    size: {
      type: Number,
      default: 3200
    }
  },
  computed: {
    scale() {
      return scale
        .domain([0, max(this.planets.map(d => d.distance))])
        .range([0, this.size]);
    }
  },
  methods: {
    translate(p) {
      return `translate(0, ${this.scale(p.distance)})`;
    }
  }
};
</script>
