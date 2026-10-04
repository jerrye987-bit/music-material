<template>
  <div class="bar">
    <div class="bar__content">
      <div class="bar__playerProgress"></div>
      <div class="bar__playerBlock">
        <div class="bar__player">
          <div class="player__controls">
            <div class="player__btnPrev">
              <svg class="player__btnPrevSvg">
                <use xlink:href="/img/icon/sprite.svg#icon-prev"></use>
              </svg>
            </div>
            <div class="player__btnPlay btn">
              <svg class="player__btnPlaySvg">
                <use xlink:href="/img/icon/sprite.svg#icon-play"></use>
              </svg>
            </div>
            <div class="player__btnNext">
              <svg class="player__btnNextSvg">
                <use xlink:href="/img/icon/sprite.svg#icon-next"></use>
              </svg>
            </div>
            <div class="player__btnRepeat btnIcon">
              <svg class="player__btnRepeatSvg">
                <use xlink:href="/img/icon/sprite.svg#icon-repeat"></use>
              </svg>
            </div>
            <div class="player__btnShuffle btnIcon">
              <svg class="player__btnShuffleSvg">
                <use xlink:href="/img/icon/sprite.svg#icon-shuffle"></use>
              </svg>
            </div>
          </div>

          <div class="player__trackPlay">
            <div class="trackPlay__contain">
              <div class="trackPlay__image">
                <svg class="trackPlay__svg">
                  <use xlink:href="/img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div class="trackPlay__author">
                <a class="trackPlay__authorLink" href="">Ты та...</a>
              </div>
              <div class="trackPlay__album">
                <a class="trackPlay__albumLink" href="">Баста</a>
              </div>
            </div>
            <div class="trackPlay__dislike">
              <div class="player__btnShuffle btnIcon">
                <svg class="trackPlay__likeSvg">
                  <use xlink:href="/img/icon/sprite.svg#icon-like"></use>
                </svg>
              </div>
              <div class="trackPlay__dislike btnIcon">
                <svg class="trackPlay__dislikeSvg">
                  <use xlink:href="/img/icon/sprite.svg#icon-dislike"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="bar__volumeBlock">
          <div class="volume__content">
            <div class="volume__image">
              <svg class="volume__svg">
                <use xlink:href="/img/icon/sprite.svg#icon-volume"></use>
              </svg>
            </div>
            <div class="volume__progress btn">
              <input class="volume__progressLine btn" type="range" name="range" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
