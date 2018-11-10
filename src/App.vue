<template>
  <div id="app">
    <!-- step 1: the red planet -->
    <centered-svg>
      <circle r="200" fill="firebrick"></circle>
    </centered-svg>

    <!-- step 2: render planet -->
    <!-- <centered-svg>
      <planet :layers="Earth.layers" :size="size">
        <svg-center-label>{{Earth.name}}</svg-center-label>
      </planet>
    </centered-svg> -->

    <!-- step 2b: render the sun -->
    <!-- <centered-svg>
      <planet :layers="Sun.layers" :size="size">
        <svg-center-label>{{Sun.name}}</svg-center-label>
      </planet>
    </centered-svg> -->

    <!-- step 3: render planet in solar system -->
    <!-- <column-svg :size="solarSize" :width="width">
      <planet :layers="Sun.layers" :size="10"></planet>
      <space-axis :scale="scale" :size="width" />
      <solar-system :planets="planets" :scale="scale">
        <planet slot-scope="{ planet }" :layers="planet.layers" :size="10">
          <svg-center-label>{{planet.name}}</svg-center-label>
        </planet>
      </solar-system>
    </column-svg> -->

    <!-- step beyond: render 2d animated solar system -->
    <!-- <centered-svg>
      <solar-system-2d :planets="planets" :size="230" :period="1000">
        <planet slot-scope="{ planet }" :layers="planet.layers" :size="2">
          <svg-center-label>{{planet.name}}</svg-center-label>
        </planet>
      </solar-system-2d>
    </centered-svg> -->
  </div>
</template>

<script>
import CenteredSvg from './CenteredSvg';
import ColumnSvg from './ColumnSvg';
import Planet from './Planet';
import SolarSystem from './SolarSystem';
import SolarSystem2d from './SolarSystem2d';
import SvgCenterLabel from './SvgCenterLabel';
import { Earth, planets, Sun } from './planets.js';
import SpaceAxis from './SpaceAxis';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

const scale = scaleLinear()
  .domain([0, max(planets.map(d => d.distance))]) // miles
  .range([0, 3200]); // pixels

export default {
  components: {
    CenteredSvg,
    Planet,
    ColumnSvg,
    SolarSystem,
    SolarSystem2d,
    SvgCenterLabel,
    SpaceAxis
  },
  data() {
    return {
      size: 200,
      width: 500,
      solarSize: 3200,
      planets,
      Sun,
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
