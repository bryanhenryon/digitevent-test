<template>
  <div class="page-one">
    <div class="background-blue">
      <p class="indication">
        Veuillez entrer des dates séparées par des virgules :
      </p>
      <form @submit.prevent="submit" class="form">
        <input
          :disabled="disabled"
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
      <div class="intro">
        <div class="history-moment">A moment of history</div>
        <div class="entered-dates">You entered {{ facts.length }} dates</div>
      </div>
      <div v-for="fact in facts" :key="fact" class="fact">
        <div class="fact-date">{{ fact.date }}</div>
        <p>{{ fact.data }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      disabled: false,
      inputVal: "",
      inputValError: "",
      facts: [],
    };
  },
  methods: {
    submit() {
      if (this.inputVal === "") {
        return (this.inputValError = "Veuillez indiquer une date");
      }
      // Split la valeur de l'input en array avec comme délimiteur chaque virgule, puis remap l'array en retirant tout potentiel espace
      this.inputVal = this.inputVal
        .split(",")
        .map((str) => str.replace(/\s/g, ""));

      // Prévient le spam d'appels
      this.disabled = true;

      // Appel à mon API endpoint pour chercher des facts
      axios
        .post("/api/get_facts", {
          dates: this.inputVal,
        })
        .then((res) => {
          if (res.data.name === "Error") {
            this.inputValError =
              "Veuillez indiquer une date valide (ex: 17/4, 13/4, 10/4...)";
          } else {
            this.inputValError = "";
            this.facts = res.data;
            this.$emit("getFacts", this.facts);
          }
          this.inputVal = "";
          this.disabled = false;
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
  background: rgb(107, 203, 241);
  padding: 6rem 2rem;
  max-width: 500px;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
}

.indication {
  text-align: center;
}

.form {
  padding: 2rem;
  margin-bottom: 2rem;

  .input {
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid #000;
    padding-bottom: 0.2rem;
    background: inherit;

    &::placeholder {
      text-align: center;
      color: rgb(73, 72, 72);
      font-weight: bold;
    }
  }

  .error {
    color: rgb(197, 31, 31);
    font-size: 1.3rem;
    margin-top: 0.5rem;
    font-weight: 500;
    text-align: center;
  }
}

.facts {
  transform: translateY(-55px);

  .intro {
    background: rgb(32, 31, 31);
    border: 2px solid #000;
    text-align: center;
    color: #fff;
    padding: 3rem 2rem;
    margin-bottom: 3rem;

    .history-moment {
      text-transform: uppercase;
    }

    .entered-dates {
      font-weight: 500;
      margin-top: 0.5rem;
    }
  }

  .fact {
    max-width: 30rem;
    width: 100%;
    margin: 2rem auto;
    border-radius: 0.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 2rem;
    background: #fff;

    .fact-date {
      font-weight: 500;
    }
  }
}
</style>
