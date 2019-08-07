<template>
  <svg :width="size" :height="size" class="space">
    <slot name="one">
      <g>
        <circle fill="red" r="10"></circle>
      </g>
    </slot>
    <slot name="two">
      <g :transform="translate(size / 2, 0)">
        <circle fill="orange" r="10"></circle>
      </g>
    </slot>
    <slot name="three">
      <g :transform="translate(0, size / 2)">
        <circle fill="yellow" r="10"></circle>
      </g>
    </slot>
    <slot name="four">
      <g slot:four :transform="translate(size / 2, size / 2)">
        <circle fill="green" r="10"></circle>
      </g>
    </slot>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 500
    }
  },
  methods: {
    translate(x, y) {
      return `translate(${x}, ${y})`;
    }
  }
};
</script>
