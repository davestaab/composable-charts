<template>
  <div id="app">
    <!-- <centered-svg class="detail">
      <planet :layers="selectedPlanet.layers" :size="200">
        <svg-center-label>{{selectedPlanet.name}}</svg-center-label>
      </planet>
    </centered-svg> -->
    <!-- <column-svg :size="solarSize">
      <planet :layers="Sun.layers" :size="10"></planet>
      <solar-system :planets="planets" :size="solarSize">
        <planet slot-scope="{ planet }" :layers="planet.layers" :size="10" @click.native="handleClick(planet)">
          <svg-center-label>{{planet.name}}</svg-center-label>
        </planet>
      </solar-system>
    </column-svg> -->
    <centered-svg>
      <solar-system-2d :planets="planets" :size="230">
        <planet slot-scope="{ planet }" :layers="planet.layers" :size="1" @click.native="handleClick(planet)">
          <svg-center-label>{{planet.name}}</svg-center-label>
        </planet>
      </solar-system-2d>
    </centered-svg>
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

export default {
  components: {
    CenteredSvg,
    Planet,
    ColumnSvg,
    SolarSystem,
    SolarSystem2d,
    SvgCenterLabel
  },
  data() {
    return {
      size: 200,
      solarSize: 3200,
      planets,
      Sun,
      selectedPlanet: Earth
    };
  },
  methods: {
    handleClick(p) {
      this.selectedPlanet = p;
    }
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
