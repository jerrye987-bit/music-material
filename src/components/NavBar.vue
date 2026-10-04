<template>
  <nav class="main__nav">
    <div class="nav__logo">
      <img width="250" height="170" class="logo__image" src="/img/logo.png" alt="logo" />
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
</template>

<script setup></script>
