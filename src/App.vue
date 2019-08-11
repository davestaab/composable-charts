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
        <linear-scale
          :accessor="planetLayerRadiusAccessor"
          :data="Earth.layers"
          :size="innerWidth / 2"
          v-slot="{ scale: planetScale }"
        >
          <!--          <planet :scale="planetScale" :layers="Sun.layers">-->
          <!--            <text-centered>{{ Sun.name }}</text-centered>-->
          <!--          </planet>-->
          <planet :scale="planetScale" :layers="Earth.layers">
            <text-centered>{{ Earth.name }}</text-centered>
          </planet>
        </linear-scale>
      </centered-square>
    </svg-chart>
    <br />
    <!-- area chart -->
    <svg-chart :padding="35" v-slot="{ innerWidth, innerHeight }">
      <time-scale
        :accessor="stockXAccessor"
        :data="stockData"
        :size="innerWidth"
        v-slot="{ scale: x }"
      >
        <linear-scale
          :accessor="stockYAccessor"
          :data="stockData"
          :size="innerHeight"
          :reverse="true"
          v-slot="{ scale: y }"
        >
          <line-path
            :data="stockData"
            :x-scale="x"
            :y-scale="y"
            :x-accessor="stockXAccessor"
            :y-accessor="stockYAccessor"
          ></line-path>
          <area-path
            :data="stockData"
            :x-scale="x"
            :y-scale="y"
            :x-accessor="stockXAccessor"
            :y-accessor="stockYAccessor"
          ></area-path>
          <axis-bottom
            :transform="`translate(0, ${innerHeight})`"
            :scale="x"
            :width="innerWidth"
          ></axis-bottom>
          <axis-left :scale="y"></axis-left>
        </linear-scale>
      </time-scale>
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
    <svg-chart
      :padding="20"
      :height="3200"
      v-slot="{ innerWidth, innerHeight }"
    >
      <linear-scale
        :accessor="planetDistanceAccessor"
        :data="planets"
        :size="innerHeight"
        v-slot="{ scale: y }"
      >
        <centered-column :size="innerWidth">
          <linear-scale
            :accessor="planetLayerRadiusAccessor"
            :data="planets.flatMap(p => p.layers)"
            :size="50"
            v-slot="{ scale: planetScale }"
          >
            <solar-system :planets="planets" :scale="y">
              <template v-slot:default="{ planet }">
                <planet :scale="planetScale" :layers="planet.layers">
                  <text-centered>
                    {{ planet.name }}
                  </text-centered>
                </planet>
              </template>
            </solar-system>
          </linear-scale>
        </centered-column>
        <!--        <text-->
        <!--          v-for="p in planets"-->
        <!--          :transform="`translate(20, ${y(p.distance)})`"-->
        <!--          >{{ p.name }}</text-->
        <!--        >-->
        <axis-right :scale="y"></axis-right>
      </linear-scale>
    </svg-chart>

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
import CenteredColumn from './CenteredColumn';
import Planet from './Planet';
import SolarSystem from './SolarSystem';
import SolarSystem2d from './SolarSystem2d';
import TextCentered from './TextCentered';
import { Earth, planets, Sun } from './planets.js';
import FourQuadrants from './FourQuadrants';
import AreaPath from './AreaPath';
import LinePath from './LinePath';
import TimeScale from './TimeScale';
import LinearScale from './LinearScale';
import AxisBottom from './AxisBottom';
import AxisLeft from './AxisLeft';
import AxisRight from './AxisRight';

import aaplStock from 'raw-loader!./data/aapl.csv';

import { csvParse, autoType } from 'd3-dsv';
import { prop } from './utils';

const stockData = csvParse(aaplStock, autoType);

export default {
  components: {
    SvgChart,
    CenteredColumn,
    Planet,
    CenteredSquare,
    SolarSystem,
    SolarSystem2d,
    TextCentered,
    FourQuadrants,
    AreaPath,
    TimeScale,
    LinearScale,
    LinePath,
    AxisBottom,
    AxisLeft,
    AxisRight
  },
  data() {
    return {
      size: 200,
      width: 500,
      solarSize: 3200,
      planets,
      Sun,
      Earth,
      stockData,
      stockXAccessor: prop('date'),
      stockYAccessor: prop('close'),
      planetDistanceAccessor: prop('distance'),
      planetLayerRadiusAccessor: prop('radius')
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
