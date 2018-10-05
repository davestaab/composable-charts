<template>
  <div id="app">
    <centered-svg>
      <planet :layers="layers" :size="size">
        <svg-center-label>{{selectedPlanet.name}}</svg-center-label>
      </planet>
    </centered-svg>
    <column-svg :size="solarSize+200">
      <!-- <planet :layers="Sun.layers" :size="10"></planet> -->
      <solar-system :planets="planets" :size="solarSize">
        <planet slot-scope="{ planet }" :layers="planet.layers" :size="10" @click.native="handleClick(planet)">
          <svg-center-label>{{planet.name}}</svg-center-label>
        </planet>
      </solar-system>
    </column-svg>
  </div>
</template>

<script>
import CenteredSvg from './CenteredSvg';
import ColumnSvg from './ColumnSvg';
import Planet from './Planet';
import SolarSystem from './SolarSystem';
import SvgCenterLabel from './SvgCenterLabel';
import { Earth, planets, Sun } from './planets.js';

export default {
  components: {
    CenteredSvg,
    Planet,
    ColumnSvg,
    SolarSystem,
    SvgCenterLabel
  },
  data() {
    return {
      size: 200,
      solarSize: 3200,
      // layers: Earth.layers,
      planets,
      Sun,
      selectedPlanet: Earth
    };
  },
  computed: {
    layers() {
      return this.selectedPlanet.layers;
    }
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
