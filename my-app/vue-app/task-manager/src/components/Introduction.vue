<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Questa applicazione è stata creata con
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
    </h3>
  </div>
</template>

<style>
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: var(--vt-c-green);
  text-align: left;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
