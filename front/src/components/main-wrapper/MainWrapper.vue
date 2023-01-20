<template>
  <div class="container">
    <div class="items">
      <div class="item" v-for="item in product" :key="item.id">
        <h1>{{ item.title }}</h1>
        <h3>{{ item.category }}</h3>
        <p>{{ item.description }}</p>
        <h1>{{ item.image }}</h1>
        <h4>{{ item.rating }}</h4>
        <h3>{{ item.price }} руб</h3>
        <button>Купить</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./main-wrapper.ts"></script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-grow: 1;
}
.items {
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.item {
  margin: 20px 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid black;
  height: 400px;
  width: 300px;
  border-radius: 5px;
}
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

* {
  box-sizing: border-box;
}
</style>
