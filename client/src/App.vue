<template>
  <div>
    <div class="dark-blue-form"></div>
    <app-navbar></app-navbar>
    <div class="container">
      <router-view v-slot="{ Component }" @getFacts="setFacts" :facts="facts">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  data() {
    return {
      facts: null,
    };
  },
  components: {
    "app-navbar": Navbar,
  },
  methods: {
    setFacts(facts) {
      this.facts = facts;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  background: rgb(255, 0, 0);
  background: linear-gradient(
    180deg,
    rgb(240, 51, 51) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.container {
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
}

.dark-blue-form {
  background: rgb(18, 18, 112);
  position: absolute;
  top: 0;
  right: 0;
  height: 350px;
  width: 100%;
  z-index: -10;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 20%);
}
</style>
