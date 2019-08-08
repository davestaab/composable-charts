<template>
  <div id="app">
    <!-- step 1: the red planet -->
    <svg-chart v-slot="{ innerWidth }">
      <centered-square :size="innerWidth">
        <circle :r="innerWidth / 2" fill="firebrick"></circle>
      </centered-square>
    </svg-chart>
    <br />
    <!-- step 2: render planet -->
    <svg-chart v-slot="{ innerWidth }">
      <centered-square :size="innerWidth">
        <planet :layers="Earth.layers" :size="innerWidth">
          <text-centered>{{ Earth.name }}</text-centered>
        </planet>
      </centered-square>
    </svg-chart>
    <br />
    <!-- area chart -->
    <svg-chart v-slot="{ innerWidth, innerHeight }">
      <area-path
        :width="innerWidth"
        :height="innerHeight"
        :data="stockData"
        :x-scale="stockXScale"
        :y-scale="stockYScale"
        :x-accessor="stockXAccessor"
        :y-accessor="stockYAccessor"
      ></area-path>
    </svg-chart>

    <!-- step 2b: render the sun -->
    <!--    <svg-chart>-->
    <!--      <centered-square>-->
    <!--        <planet :layers="Sun.layers" :size="1">-->
    <!--          <text-centered>{{ Sun.name }}</text-centered>-->
    <!--        </planet>-->
    <!--      </centered-square>-->
    <!--    </svg-chart>-->

    <!-- step 3: render planet in solar system -->
    <!--    <column-svg :size="solarSize" :width="width">-->
    <!--      &lt;!&ndash;      <planet :layers="Sun.layers" :size="10"></planet>&ndash;&gt;-->
    <!--      <space-axis :scale="scale" :size="width" />-->
    <!--          <solar-system :planets="planets" :scale="scale">-->
    <!--            <planet slot-scope="{ planet }" :layers="planet.layers" :size="10">-->
    <!--              <text-centered>{{ planet.name }}</text-centered>-->
    <!--            </planet>-->
    <!--          </solar-system>-->
    <!--    </column-svg>-->

    <!-- step beyond: render 2d animated solar system -->
    <!--    <centered-square>-->
    <!--      <solar-system-2d :planets="planets" :size="230" :period="1000">-->
    <!--        <planet slot-scope="{ planet }" :layers="planet.layers" :size="2">-->
    <!--          <text-centered>{{ planet.name }}</text-centered>-->
    <!--        </planet>-->
    <!--      </solar-system-2d>-->
    <!--    </centered-square>-->
    <!--    <four-quadrants> </four-quadrants>-->
  </div>
</template>

<script>
import SvgChart from './SvgChart';
import CenteredSquare from './CenteredSquare';
import ColumnSvg from './ColumnSvg';
import Planet from './Planet';
import SolarSystem from './SolarSystem';
import SolarSystem2d from './SolarSystem2d';
import TextCentered from './TextCentered';
import { Earth, planets, Sun } from './planets.js';
import SpaceAxis from './SpaceAxis';
import FourQuadrants from './FourQuadrants';
import AreaPath from './AreaPath';
import aaplStock from 'raw-loader!./data/aapl.csv';
import { csvParse, autoType } from 'd3-dsv';
import { scaleLinear, scaleUtc } from 'd3-scale';
import { max, extent } from 'd3-array';
import { prop } from './utils';

const stockData = csvParse(aaplStock, autoType);
const stockXScale = scaleUtc().domain(extent(stockData, prop('date')));
const stockYScale = scaleLinear()
  .domain([0, max(stockData, prop('close'))])
  .nice();

const scale = scaleLinear()
  .domain([0, max(planets.map(d => d.distance))]) // miles
  .range([0, 3200]); // pixels

export default {
  components: {
    SvgChart,
    CenteredSquare,
    Planet,
    ColumnSvg,
    SolarSystem,
    SolarSystem2d,
    TextCentered,
    SpaceAxis,
    FourQuadrants,
    AreaPath
  },
  data() {
    return {
      size: 200,
      width: 500,
      solarSize: 3200,
      planets,
      Sun,
      Earth,
      scale,
      stockXScale,
      stockYScale,
      stockData,
      stockXAccessor: prop('date'),
      stockYAccessor: prop('close')
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
