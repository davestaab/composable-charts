<template>
  <div id="app">
    <!-- step 1: the red planet -->
    <svg-centered>
      <circle :r="scale(Earth.layers[0].radius)" :fill="Earth.layers[0].color"></circle>
    </svg-centered>
    <pre>{{scale(4025)}}</pre>
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
pre {
  font-size: 20px;
}
</style>
