<template>
  <div class="playlist__item">
    <div class="playlist__track">
      <div class="track__title">
        <div class="track__titleImage">
          <svg class="track__titleSvg">
            <use xlink:href="/img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div class="track__title-text">
          <a class="track__titleLink" href="">
            {{ track.title }}
            <span class="track__titleSpan">{{ track.subtitle }}</span>
          </a>
        </div>
      </div>
      <div class="track__author">
        <a class="track__authorLink" href="">{{ track.author }}</a>
      </div>
      <div class="track__album">
        <a class="track__albumLink" href="">{{ track.album }}</a>
      </div>
      <div class="track__time">
        <svg class="track__timeSvg">
          <use xlink:href="/img/icon/sprite.svg#icon-like"></use>
        </svg>
        <span class="track__timeText">{{ track.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  track: {
    type: Object,
    required: true,
  },
})
</script>
