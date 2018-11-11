<template>
  <div id="app">
    <!-- step 1: the red planet -->
    <svg-centered>
      <circle v-for="l in Earth.layers" :key="l.name" :r="scale(l.radius)" :fill="l.color"></circle>
    </svg-centered>
    <pre>{{scale(2010)}}</pre>
    <pre>{{Earth}}</pre>
  </div>
</template>

<script>
import SvgCentered from './SvgCentered';
import { Earth } from './planets.js';
import { scaleLinear } from 'd3-scale';
const scale = scaleLinear()
  .domain([0, 4025])
  .range([0, 200]);

export default {
  components: { SvgCentered },
  data() {
    return {
      Earth,
      scale
    };
  }
};
</script>


<style>
body {
  padding: 20px;
}
.space {
  background-color: black;
}
</style>
