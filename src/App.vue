<template>
  <div id="nav">
    <div>×1 {{ count }}</div>
    <div>×2 {{ doubleCount }}</div>
    <div>×3 {{ tripleCount }}</div>
    <div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    doubleCount() {
      return this.$store.getters.doubleCount;
    },
    tripleCount() {
      return this.$store.getters.tripleCount;
    }
  },
  methods: {
    increment: function(){
      this.$store.state.count++;
    },
    decrement: function(){
      this.$store.state.count--;
    }
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
