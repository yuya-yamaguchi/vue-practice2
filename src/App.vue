<template>
  <div id="nav">
    <div>×1 {{ count }}</div>
    <div>×2 {{ doubleCount }}</div>
    <div>×3 {{ tripleCount }}</div>
    <div>
      <button @click="increment(1)">+1</button>
      <button @click="decrement(1)">-1</button>
    </div>
    <div>
      <input type="text" v-model="message">
      <p>{{ message }}</p>
      
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import { mapGetters, /* mapMutations */ mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(
      "count",
      [
        "doubleCount",
        "tripleCount"
      ]
    ),
    count() {
      return this.$store.getters.count;
    },
    // message() {
    //   return this.$store.getters.message;
    // }
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value)
      }
    }
  },
  methods: {
    // ...mapMutations(["increment", "decrement"])
    ...mapActions("count",["increment", "decrement"])
    // increment() {
    //   this.$store.dispatch("increment", 1);
    // },
    // decrement() {
    //   this.$store.dispatch("decrement", 1);
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
