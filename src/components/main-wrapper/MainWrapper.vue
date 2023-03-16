<template>
    <div>
        <div class="container" id="container">
            <div class="filters">
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Найти</button>
                        <input
                            v-model="search"
                            class="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>
                    <form class="form-inline">
                        <button
                            class="btn btn-outline-success my-2 my-sm-0"
                            @click.prevent="sortByPrice(isSort)"
                            type="submit"
                        >
                            По цене
                        </button>
                    </form>
                    <form class="form-inline">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">По рейтингу</button>
                    </form>
                </nav>
            </div>

            <ModalPopUp v-if="isPopUpOpen">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-circle"
                    viewBox="0 0 16 16"
                    @click="closePopUp()"
                >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    />
                </svg>
            </ModalPopUp>
            <div class="items">
                <div class="item" v-for="item in array" :key="item.id">
                    <h5>{{ item.title }}</h5>
                    <div class="card" style="width: 18rem">
                        <div
                            @click="setProduct(item)"
                            class="product-cover"
                            :style="{ backgroundImage: `url(${'data:image/jpeg;base64,' + item.image})` }"
                        ></div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{{ item.category }}</li>
                            <li class="list-group-item">{{ item.rating }}</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">{{ item.price }} руб</a>
                            <button type="button" class="btn btn-success">купить</button>
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="Жабница">
                <ul class="pagination pagination-lg">
                    <div v-for="page in pageCount()" :key="page">
                        <li class="page-item">
                            <a class="page-link" href="#" @click="pageClick(page)">{{ page }}</a>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script lang="ts" src="./main-wrapper.ts"></script>

<style scoped lang="scss">
.navbar {
    display: flex;
    justify-content: space-evenly;
}
.form-inline {
    display: flex;
}
.filters {
    width: 1200px;
}
.txt {
    padding: 6px;
    font-size: 12px;
    text-align: start;
}
.main-cart-body {
    height: 100px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;
}
.card-body {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}
.items {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.product-cover {
    height: 180px;
    width: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 5px 5px 0px 0px;
}
.item {
    padding: 20px;
    margin: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 400px;
    border-radius: 5px;
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
