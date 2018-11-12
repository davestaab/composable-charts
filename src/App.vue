<template>
  <div id="app">
    <!-- step 1: the red planet -->
    <svg-centered>
      <circle :r="Earth.layers[0].radius" fill="firebrick"></circle>
    </svg-centered>
    <pre>{{Earth}}</pre>
  </div>
</template>

<script>
import SvgCentered from './SvgCentered';
import { Earth } from './planets.js';

export default {
  components: { SvgCentered },
  data() {
    return {
      Earth
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
