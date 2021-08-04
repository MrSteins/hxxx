<template>
  <div class="slider" ref="rootRef">
    <div class="slider-group">
      <div class="slider-page" v-for="item in sliders" :key="item.id">
        <a :href="item.link">
          <img :src="item.pic" alt="">
        </a>
      </div>
    </div>
    <div class="dots-wrapper">
      <span class="dot" v-for="(item,index) in sliders" :key="item.id" :class="{active: currentPageIndex === index}"></span>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSlider from './use-slider'
export default {
  props: {
    sliders: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {
    const rootRef = ref(null)
    const { currentPageIndex } = useSlider(rootRef)

    return {
      rootRef,
      currentPageIndex
    }
  }
}
</script>

<style lang="scss">
.slider {
  min-height: 1px;
  position: relative;
  font-size: 0;
  touch-action: pan-y;
  .slider-group{
    overflow: hidden;
    white-space: nowrap;
    .slider-page {
      display: inline-block;
      transform: translate3d(0,0,0);
      backface-visibility: hidden;
      a {
        width: 100%;
        display: block;
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
  .dots-wrapper{
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: $color-text-l;
      &.active {
        width: 20px;
        border-radius: 4px;
        background-color: $color-text-ll;
      }
    }
  }
}
</style>
