<template>
  <div id="app">
    <!-- step 1: the red planet -->
    <svg-centered>
      <circle r="200" fill="firebrick"></circle>
    </svg-centered>

  </div>
</template>

<script>
import SvgCentered from './SvgCentered';
export default {
  components: { SvgCentered }
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
