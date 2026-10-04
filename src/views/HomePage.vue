<template>
  <div class="wrapper">
    <div class="container">
      <main class="main">
        <NavBar />

        <div class="centerblock">
          <FilterControls />
          <Playlist />
        </div>

        <div class="main__sidebar">
          <div class="sidebar__personal">
            <p class="sidebar__personalName">Sergey.Ivanov</p>
            <div class="sidebar__icon">
              <svg>
                <use xlink:href="/img/icon/sprite.svg#logout"></use>
              </svg>
            </div>
          </div>
          <div class="sidebar__block">
            <div class="sidebar__list">
              <div class="sidebar__item">
                <a class="sidebar__link" href="#">
                  <img
                    class="sidebar__img"
                    src="/img/playlist01.png"
                    alt="day's playlist"
                    width="250"
                    height="170"
                  />
                </a>
              </div>
              <div class="sidebar__item">
                <a class="sidebar__link" href="#">
                  <img
                    class="sidebar__img"
                    src="/img/playlist02.png"
                    alt="day's playlist"
                    width="250"
                    height="170"
                  />
                </a>
              </div>
              <div class="sidebar__item">
                <a class="sidebar__link" href="#">
                  <img
                    class="sidebar__img"
                    src="/img/playlist03.png"
                    alt="day's playlist"
                    width="250"
                    height="170"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PlayerBar />

      <footer class="footer"></footer>
    </div>
  </div>
</template>

<script setup>
import '../assets/css/page.css'
import NavBar from '@/components/NavBar.vue'
import FilterControls from '@/components/FilterControls.vue'
import Playlist from '@/components/PlayList.vue'
import PlayerBar from '@/components/PlayerBar.vue'
</script>
