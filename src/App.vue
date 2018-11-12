<template>
  <div id="app">
    <svg-centered>
      <planet :layers="Earth.layers"></planet>
    </svg-centered>
    <pre>{{Earth}}</pre>
  </div>
</template>

<script>
import SvgCentered from './SvgCentered';
import { Earth } from './planets.js';
import Planet from './Planet';

export default {
  components: { SvgCentered, Planet },
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
</style>
