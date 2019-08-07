<template>
  <svg :width="width" :height="height" class="space">
    <g :transform="translate(padding, padding)">
      <slot
        v-bind:innerWidth="innerWidth"
        v-bind:innerHeight="innerHeight"
      ></slot>
    </g>
  </svg>
</template>

<script>
import { translate } from './utils';

export default {
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 500
    },
    padding: {
      type: Number,
      default: 25
    }
  },
  computed: {
    innerWidth() {
      return this.width - this.padding * 2;
    },
    innerHeight() {
      return this.height - this.padding * 2;
    }
  },
  methods: {
    translate
  }
};
</script>
