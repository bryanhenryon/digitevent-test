<template>
  <div>
    <app-navbar></app-navbar>
    <div class="container">
      <router-view v-slot="{ Component }">
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
  components: {
    "app-navbar": Navbar,
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
}

.container {
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
}
</style>
