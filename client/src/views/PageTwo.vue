<template>
  <div class="page-two">
    <div class="table-wrapper" v-if="facts">
      <table class="table" v-for="fact in facts" :key="fact">
        <thead>
          <th>Date</th>
          <th>Fact</th>
        </thead>
        <tbody>
          <tr>
            <td data-label="Date">{{ fact.date }}</td>
            <td data-label="Fact">{{ fact.data }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      Il n'y a aucune donnée à afficher. Veuillez renseigner des dates dans la
      <router-link class="redirect-link" to="/">page 1</router-link>.
    </div>
  </div>
</template>

<script>
export default {
  props: ["facts"],
};
</script>

<style lang="scss" scoped>
.page-two {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin: 10rem 0;
}

.table-wrapper {
  width: 100%;
}

.table {
  width: 100%;
  max-width: 600px;
  padding: 0 1rem;
  margin: 0 auto 10rem auto;
  text-align: center;
  border-collapse: collapse;

  @media (max-width: 900px) {
    text-align: right;
    position: relative;
    border: none;
    &::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }
    &::after {
      content: attr(data-action);
      position: absolute;
      left: 0;
      top: 100%;
      padding-left: 15px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }
  }

  &,
  tbody,
  tr,
  td {
    @media (max-width: 900px) {
      display: block;
      width: 100%;
    }
  }
  thead {
    @media (max-width: 900px) {
      display: none;
    }
  }
  th {
    padding: 0 2rem 1rem 0rem;
    font-weight: 500;
  }

  td {
    border-top: 1px solid #fff;
    padding: 1rem 2rem 0 0rem;
    max-width: 200px;

    :last-child {
      padding-right: 0;
    }

    @media (max-width: 900px) {
      max-width: 100%;
      text-align: right;
      padding: 2rem 0 2rem 50%;
      position: relative;
      border: none;

      &::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        font-size: 15px;
        font-weight: 500;
        text-align: left;
      }

      &::after {
        content: attr(data-action);
        position: absolute;
        left: 0;
        top: 100%;
        font-size: 15px;
        font-weight: 500;
        text-align: left;
      }
    }
  }
}

.redirect-link {
  color: inherit;
}
</style>
