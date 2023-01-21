<template>
    <div class="header">
        <nav class="header">
            <router-link to="/">Каталог</router-link> | <router-link to="/about">Корзина</router-link> |

            <div class="auth-container" v-if="!checkAuth()">
                <router-link to="/auth/login">вход</router-link> |
                <router-link to="/auth/register">регистрация</router-link>
            </div>

            <div v-if="checkAuth()" class="auth-container">
                <button href="#" type="submit" @click="clearcookie()">Выйти</button> |
                <a href="#">{{ nickname }}</a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                </svg>
            </div>
            <div>
                <div class="form-check form-switch">
                    <input @click="checkTheme()" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Ночной режим</label>
                </div>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" src="./main-header.ts"></script>

<style lang="scss">
.header {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
