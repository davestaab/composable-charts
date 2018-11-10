<template>
  <g>
    <g v-for="p in planets" :key="p.name" :transform="translate(p)">
      <slot :planet="p"></slot>
    </g>
  </g>
</template>

<script>
export default {
  props: {
    planets: Array,
    scale: Function
  },
  methods: {
    translate(p) {
      return `translate(0, ${this.scale(p.distance)})`;
    }
  }
};
</script>
