<template>
  <div class="centerblock__content">
    <div class="content__title">
      <div class="playlistTitle__col col01">Трек</div>
      <div class="playlistTitle__col col02">Исполнитель</div>
      <div class="playlistTitle__col col03">Альбом</div>
      <div class="playlistTitle__col col04">
        <svg class="playlistTitle__svg">
          <use xlink:href="/img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
    <div class="content__playlist">
      <TrackItem
        v-for="track in tracks"
        :key="track.id"
        :track="track" />
    </div>
  </div>
</template>

<script setup>
import TrackItem from './TrackItem.vue'

const tracks = [
  { id: 1, title: 'Guilt', subtitle: '', author: 'Nero', album: 'Welcome Reality', time: '4:44' },
  {
    id: 2,
    title: 'Elektro',
    subtitle: '',
    author: 'Dynoro, Outwork, Mr. Gee',
    album: 'Elektro',
    time: '2:22',
  },
  { id: 3, title: "I'm Fire", subtitle: '', author: 'Ali Bakgor', album: "I'm Fire", time: '2:22' },
  {
    id: 4,
    title: 'Non Stop',
    subtitle: '(Remix)',
    author: 'Стоункат, Psychopath',
    album: 'Non Stop',
    time: '4:12',
  },
  {
    id: 5,
    title: 'Run Run',
    subtitle: '(feat. AR/CO)',
    author: 'Jaded, Will Clarke, AR/CO',
    album: 'Run Run',
    time: '2:54',
  },
]
</script>

<style scoped>
  .centerblock__content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .content__playlist {
    display: flex;
    flex-direction: column;
  }

  .sidebar-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 280px;
    flex-shrink: 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .card img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
    margin-bottom: 8px;
  }

  .card span {
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    .page-layout {
      flex-direction: column;
    }
    .sidebar-column {
      width: 100%;
    }
  }
</style>
