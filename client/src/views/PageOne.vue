<template>
  <div class="page-one">
    <div class="background-blue">
      <p class="indication">
      Veuillez entrer des dates séparées par des virgules :
    </p>
    <form @submit.prevent="submit" class="form">
      <input
        class="input"
        v-model="inputVal"
        type="text"
        placeholder="17/4, 13/4, 10/4"
      />
      <div class="error" v-if="inputValError">
        {{ inputValError }}
      </div>
    </form>
        </div>
    <div class="facts" v-if="facts.length > 0">
      <div v-for="fact in facts" :key="fact" class="fact">{{ fact }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      inputVal: "",
      inputValError: "",
      facts: [],
    };
  },
  methods: {
    submit() {
      // Appel à mon API endpoint pour chercher des facts
      axios
        .post("/api/numbersapi", {
          date: this.inputVal,
        })
        .then((res) => {
          if (res.data.name === "Error") {
            this.inputValError =
              "Veuillez indiquer une date valide (ex: 17/4, 13/4, 10/4...)";
          } else {
            this.inputValError = "";
            this.facts.push(res.data);
          }
          this.inputVal = "";
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.page-one {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background-blue {
  background: skyblue;
  padding:6rem;
  clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
}

.form {
  padding:2rem;
  margin-bottom: 2rem;

  .input {
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #000;
    padding-bottom:0.2rem;
    background: inherit;


    &::placeholder {
      text-align: center;
      color: grey;
      font-weight: bold;
    }
  }

  .error {
    color: red;
    font-size: 1.3rem;
    margin-top: 0.5rem;
  }
}

.facts .fact {
  max-width: 75%;
  width: 100%;
  margin: 2rem auto;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 2rem;
}
</style>
