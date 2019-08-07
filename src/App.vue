<template>
  <div id="app">
    <!-- step 1: the red planet -->
    <svg-chart v-slot="{ innerWidth }">
      <centered :size="innerWidth">
        <circle :r="innerWidth / 2" fill="firebrick"></circle>
      </centered>
    </svg-chart>
    <br />
    <!-- step 2: render planet -->
    <svg-chart v-slot="{ innerWidth }">
      <centered :size="innerWidth">
        <planet :layers="Earth.layers" :size="innerWidth">
          <text-centered>{{ Earth.name }}</text-centered>
        </planet>
      </centered>
    </svg-chart>

    <!-- step 2b: render the sun -->
    <!--    <svg-chart>-->
    <!--      <centered>-->
    <!--        <planet :layers="Sun.layers" :size="1">-->
    <!--          <text-centered>{{ Sun.name }}</text-centered>-->
    <!--        </planet>-->
    <!--      </centered>-->
    <!--    </svg-chart>-->

    <!-- step 3: render planet in solar system -->
    <!--    <column-svg :size="solarSize" :width="width">-->
    <!--      &lt;!&ndash;      <planet :layers="Sun.layers" :size="10"></planet>&ndash;&gt;-->
    <!--      <space-axis :scale="scale" :size="width" />-->
    <!--      <solar-system :planets="planets" :scale="scale">-->
    <!--        <planet slot-scope="{ planet }" :layers="planet.layers" :size="10">-->
    <!--          <text-centered>{{ planet.name }}</text-centered>-->
    <!--        </planet>-->
    <!--      </solar-system>-->
    <!--    </column-svg>-->

    <!-- step beyond: render 2d animated solar system -->
    <!--    <centered>-->
    <!--      <solar-system-2d :planets="planets" :size="230" :period="1000">-->
    <!--        <planet slot-scope="{ planet }" :layers="planet.layers" :size="2">-->
    <!--          <text-centered>{{ planet.name }}</text-centered>-->
    <!--        </planet>-->
    <!--      </solar-system-2d>-->
    <!--    </centered>-->
    <!--    <four-quadrants> </four-quadrants>-->
  </div>
</template>

<script>
import SvgChart from './SvgChart';
import Centered from './Centered';
import ColumnSvg from './ColumnSvg';
import Planet from './Planet';
import SolarSystem from './SolarSystem';
import SolarSystem2d from './SolarSystem2d';
import TextCentered from './TextCentered';
import { Earth, planets, Sun } from './planets.js';
import SpaceAxis from './SpaceAxis';
import FourQuadrants from './FourQuadrants';

import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

const scale = scaleLinear()
  .domain([0, max(planets.map(d => d.distance))]) // miles
  .range([0, 3200]); // pixels

export default {
  components: {
    SvgChart,
    Centered,
    Planet,
    ColumnSvg,
    SolarSystem,
    SolarSystem2d,
    TextCentered,
    SpaceAxis,
    FourQuadrants
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
