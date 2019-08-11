<template>
  <g>
    <g
      v-for="p in planets"
      :key="p.name"
      :transform="translate(0, scale(p.distance))"
    >
      <slot :planet="p"></slot>
    </g>
  </g>
</template>

<script>
import { translate } from './utils';

export default {
  props: {
    planets: Array,
    scale: Function
  },
  methods: {
    translate
  }
};
</script>
