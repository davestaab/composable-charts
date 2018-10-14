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
    },
    period: {
      type: Number,
      default: 1000
    }
  },
  mounted() {
    this.timerId = setInterval(this.rotationTimer, 50);
  },
  destroyed() {
    clearInterval(this.timerId);
  },
  data() {
    return {
      time: 0,
      lastTime: Date.now(),
      timerId: null
    };
  },
  computed: {
    scale() {
      return scale
        .domain([0, max(this.planets.map(d => d.distance))])
        .range([0, this.size]);
    }
  },
  methods: {
    rotationTimer() {
      this.time += Date.now() - this.lastTime;
      this.lastTime = Date.now();
    },
    translate(p) {
      const planetPeriod = p.period * this.period;
      const rotation =
        ((this.time % planetPeriod) / planetPeriod) * Math.PI * 2;
      const x = Math.sin(rotation) * this.scale(p.distance);
      const y = Math.cos(rotation) * this.scale(p.distance);
      return `translate(${x}, ${y})`;
    }
  }
};
</script>

<style>
</style>
