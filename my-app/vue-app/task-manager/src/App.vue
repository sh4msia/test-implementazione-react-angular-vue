<script setup>
import { RouterLink, RouterView } from "vue-router";
import Introduction from "./components/Introduction.vue";
</script>

<template>
  <div id="app">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <Introduction msg="Vue" />

        <nav>
          <RouterLink to="/">Task Manager</RouterLink>
          <RouterLink to="/about">Presentazione</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
}

.logo {
  width: 125px;
  height: 125px;
  display: block;
  padding: 2rem;
  margin-left: 7rem;
}

nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
