<template>
  <div class="About">
    <h1>Presentazione</h1>
    <div class="accordion-container">
      <div
        :class="['accordion', accordion1 ? 'open' : '']"
        @click="accordion1 = !accordion1"
      >
        <div class="icon-container">
          <img src="./images/app-structure.svg" alt="App Structure Icon" />
        </div>
        <div class="text-container">
          <h2>Struttura del progetto</h2>
          <p :class="[accordion1 ? 'open' : '']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="arrow-container">
          <img
            src="./images/reverse-arrow.svg"
            alt="Reverse Arrow Icon"
            :class="['reverse-arrow', accordion1 ? 'show' : '']"
            height="20"
            width="20"
          />
        </div>
      </div>
      <div
        :class="['accordion', accordion2 ? 'open' : '']"
        @click="accordion2 = !accordion2"
      >
        <div class="icon-container">
          <img src="./images/syntax.svg" alt="Syntax Icon" />
        </div>
        <div class="text-container">
          <h2>Sintassi del framework</h2>
          <p :class="[accordion2 ? 'open' : '']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="arrow-container">
          <img
            src="./images/reverse-arrow.svg"
            alt="Reverse Arrow Icon"
            :class="['reverse-arrow', accordion2 ? 'show' : '']"
            height="20"
            width="20"
          />
        </div>
      </div>
      <div
        :class="['accordion', accordion3 ? 'open' : '']"
        @click="accordion3 = !accordion3"
      >
        <div class="icon-container">
          <img src="./images/routing.svg" alt="Routing Icon" />
        </div>
        <div class="text-container">
          <h2>Routing</h2>
          <p :class="[accordion3 ? 'open' : '']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="arrow-container">
          <img
            src="./images/reverse-arrow.svg"
            alt="Reverse Arrow Icon"
            :class="['reverse-arrow', accordion3 ? 'show' : '']"
            height="20"
            width="20"
          />
        </div>
      </div>
      <div
        :class="['accordion', accordion4 ? 'open' : '']"
        @click="accordion4 = !accordion4"
      >
        <div class="icon-container">
          <img
            src="./images/state-management.svg"
            alt="State Management Icon"
          />
        </div>
        <div class="text-container">
          <h2>Gestione dello stato</h2>
          <p :class="[accordion4 ? 'open' : '']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="arrow-container">
          <img
            src="./images/reverse-arrow.svg"
            alt="Reverse Arrow Icon"
            :class="['reverse-arrow', accordion4 ? 'show' : '']"
            height="20"
            width="20"
          />
        </div>
      </div>
      <div
        :class="['accordion', accordion5 ? 'open' : '']"
        @click="accordion5 = !accordion5"
      >
        <div class="icon-container">
          <img src="./images/feedback.svg" alt="Feedback Icon" />
        </div>
        <div class="text-container">
          <h2>Gestione degli eventi</h2>
          <p :class="[accordion5 ? 'open' : '']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="arrow-container">
          <img
            src="./images/reverse-arrow.svg"
            alt="Reverse Arrow Icon"
            :class="['reverse-arrow', accordion5 ? 'show' : '']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordion1: true,
      accordion2: false,
      accordion3: false,
      accordion4: false,
      accordion5: false,

      appStructure: "./images/app-structure.svg",
      reverseArrow: "./images/reverse-arrow.svg",
    };
  },
};
</script>

<style scoped>
.About {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.accordion-container::-webkit-scrollbar {
  width: 10px;
  border-radius: 5px;
}

.accordion-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: var(--vt-c-green-dark);
}

.accordion-container::-webkit-scrollbar-track {
  background-color: var(--vt-c-green-bg);
  border-radius: 5px;
}

.accordion-container {
  margin-top: 2rem;
  width: 60%;
  height: 50%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}

.icon-container img {
  width: 60px;
  height: 60px;
}

.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}

.arrow-container img {
  width: 20px;
  height: 20px;
}

.accordion {
  display: flex;
  justify-content: flex-start;
  background-color: var(--vt-c-green-bg);
  border: 1px solid var(--color-border);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
  overflow: hidden;
  height: 80px;
  transition: height 0.3s;
  margin-right: 1rem;
}

.accordion h3 {
  margin: 0;
}

.accordion p {
  margin: 10px 0 0 0;
  opacity: 0;
  transition: opacity 0.3s;
}

p.open {
  opacity: 1;
}

.accordion.open {
  height: 350px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
}

.text-container h2 {
  margin: 1.5rem 0;
  text-align: left;
}

.reverse-arrow {
  transform: rotateZ(0deg);
  transition: transform 0.2s ease-in-out;
}

.reverse-arrow.show {
  transform: rotateZ(-90deg);
}
</style>
