<template>
  <g :transform="translate(size / 2, 0)">
    <slot></slot>
  </g>
</template>

<script>
import { translate } from './utils';

export default {
  props: {
    size: {
      type: Number,
      default: 500
    }
  },
  methods: {
    translate
  }
};
</script>
