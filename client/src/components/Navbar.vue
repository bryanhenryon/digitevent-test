<template>
  <nav class="navbar">
    <router-link to="/">Page 1</router-link>
    <router-link to="/page2">Page 2</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;

  a {
    color: inherit;

    &:hover {
      color: #79ad80;
    }
  }
}
</style>
