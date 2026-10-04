<script setup>
import './page.css'
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <main class="main">
        <nav class="main__nav">
          <div class="nav__logo">
            <img
              width="250"
              height="170"
              class="logo__image"
              src="/img/logo.png"
              alt="logo"
            />
          </div>
          <div class="nav__burger">
            <span class="burger__line"></span>
            <span class="burger__line"></span>
            <span class="burger__line"></span>
          </div>
          <div class="nav__menu">
            <ul class="menu__list">
              <li class="menu__item">
                <a href="#" class="menu__link">Главное</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Мой плейлист</a>
              </li>
              <li class="menu__item">
                <RouterLink to="/signin" class="menu__link">Войти</RouterLink>
              </li>
            </ul>
          </div>
        </nav>

        <div class="centerblock">
          <div class="centerblock__search">
            <svg class="search__svg">
              <use xlink:href="/img/icon/sprite.svg#icon-search"></use>
            </svg>
            <input
              class="search__text"
              type="search"
              placeholder="Поиск"
              name="search"
            />
          </div>
          <h2 class="centerblock__h2">Трекы</h2>
          <div class="centerblock__filter">
            <div class="filter__title">Искать по:</div>
            <div class="filter__button">исполнителю</div>
            <div class="filter__button">году выпуска</div>
            <div class="filter__button">жанру</div>
          </div>
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
              <!-- Трек 1 -->
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
                        Guilt <span class="track__titleSpan"></span>
                      </a>
                    </div>
                  </div>
                  <div class="track__author">
                    <a class="track__authorLink" href="">Nero</a>
                  </div>
                  <div class="track__album">
                    <a class="track__albumLink" href="">Welcome Reality</a>
                  </div>
                  <div class="track__time">
                    <svg class="track__timeSvg">
                      <use xlink:href="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span class="track__timeText">4:44</span>
                  </div>
                </div>
              </div>

              <!-- Трек 2 -->
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
                        Elektro <span class="track__titleSpan"></span>
                      </a>
                    </div>
                  </div>
                  <div class="track__author">
                    <a class="track__authorLink" href="">
                      Dynoro, Outwork, Mr. Gee
                    </a>
                  </div>
                  <div class="track__album">
                    <a class="track__albumLink" href="">Elektro</a>
                  </div>
                  <div class="track__time">
                    <svg class="track__timeSvg">
                      <use xlink:href="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span class="track__timeText">2:22</span>
                  </div>
                </div>
              </div>

              <!-- Трек 3 -->
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
                        I'm Fire <span class="track__titleSpan"></span>
                      </a>
                    </div>
                  </div>
                  <div class="track__author">
                    <a class="track__authorLink" href="">Ali Bakgor</a>
                  </div>
                  <div class="track__album">
                    <a class="track__albumLink" href="">I'm Fire</a>
                  </div>
                  <div class="track__time">
                    <svg class="track__timeSvg">
                      <use xlink:href="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span class="track__timeText">2:22</span>
                  </div>
                </div>
              </div>

              <!-- Трек 4 -->
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
                        Non Stop
                        <span class="track__titleSpan">(Remix)</span>
                      </a>
                    </div>
                  </div>
                  <div class="track__author">
                    <a class="track__authorLink" href="">
                      Стоункат, Psychopath
                    </a>
                  </div>
                  <div class="track__album">
                    <a class="track__albumLink" href="">Non Stop</a>
                  </div>
                  <div class="track__time">
                    <svg class="track__timeSvg">
                      <use xlink:href="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span class="track__timeText">4:12</span>
                  </div>
                </div>
              </div>

              <!-- Трек 5 -->
              <div class="playlist__item">
                <div class="playlist__track">
                  <div class="track__title">
                    <div class="track__titleImage">
                      <svg class="track__titleSvg">
                        <use xlink:href="/img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div>
                      <a class="track__titleLink" href="">
                        Run Run
                        <span class="track__titleSpan">
                          (feat. AR/CO)
                        </span>
                      </a>
                    </div>
                  </div>
                  <div class="track__author">
                    <a class="track__authorLink" href="">
                      Jaded, Will Clarke, AR/CO
                    </a>
                  </div>
                  <div class="track__album">
                    <a class="track__albumLink" href="">Run Run</a>
                  </div>
                  <div class="track__time">
                    <svg class="track__timeSvg">
                      <use xlink:href="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span class="track__timeText">2:54</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <input
                    class="volume__progressLine btn"
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer"></footer>
    </div>
  </div>
</template>
