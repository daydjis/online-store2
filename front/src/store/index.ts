import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router';
import { parseJwt } from '../utils/parser';

Vue.use(Vuex);

const BASE_URL = 'https://shop-back-u1bl.onrender.com/api';

export default new Vuex.Store({
    state: {
        isDarkTheme: false,
        isAuth: false,
        loader: false,
        products: [],
        user: {
            login: '',
            password: '',
        },
        userNickname: '',
    },

    getters: {
        PRODUCT(state) {
            return state.products;
        },
        USER(state) {
            return state.user;
        },
        AUTH(state) {
            return state.isAuth;
        },
        LOADER(state) {
            return state.loader;
        },
        DARK_THEME(state) {
            return state.isDarkTheme;
        },
        USER_NICKNAME(state) {
            return state.userNickname;
        },
    },

    mutations: {
        SET_PRODUCT_TO_STATE: (state, product) => {
            state.products = product;
        },
        SET_USER_INFO: (state, newUser) => {
            state.user = newUser;
        },
        IS_AUTH: (state, bAuth) => {
            state.isAuth = bAuth;
        },
        IS_DARK_THEME: (state, theme) => {
            state.isDarkTheme = theme;
        },
        ISLOADING: (state, load) => {
            state.loader = load;
        },
        SET_NICKNAME: (state, login) => {
            state.userNickname = login;
        },
    },

    actions: {
        async GET_PRODUCT({ commit }) {
            try {
                const response = await axios.get(BASE_URL + '/products/', {
                    method: 'GET',
                });
                commit('SET_PRODUCT_TO_STATE', response.data);
                console.log(response.data);
                return response;
            } catch (error) {
                console.error(error);
            } finally {
                console.log('Ok');
            }
        },

        async AUTH_LOGIN({ commit }) {
            try {
                commit('ISLOADING', true);
                await axios.post(BASE_URL + '/login', this.state.user).then(function (response) {
                    console.log(response.data.token);
                    const newCokkie = parseJwt(response.data.token);
                    document.cookie = `jwt=${response.data.token}`;
                    commit('IS_AUTH', true);
                    console.log(newCokkie);

                    localStorage.setItem('login', newCokkie);
                    commit('SET_NICKNAME', newCokkie.login);
                });
            } catch (error) {
                console.error(error);
                commit('ISLOADING', false);
            } finally {
                if (document.cookie) {
                    router.push({ path: `/` });
                }
                commit('ISLOADING', false);
            }
        },

        async AUTH_NEW_USER({ commit }) {
            try {
                commit('ISLOADING', true);
                const responce = await axios.post(BASE_URL + '/register', this.state.user);
                document.cookie = `jwt=${responce.data.token}`;
                commit('IS_AUTH', true);
                const newCokkie = parseJwt(responce.data.token);
                localStorage.setItem('login', newCokkie.login);

                commit('SET_NICKNAME', newCokkie.login);
                commit('ISLOADING', false);
            } catch (error) {
                console.error(error);
                commit('ISLOADING', false);
            } finally {
                if (document.cookie) {
                    router.push({ path: `/` });
                }
            }
        },
    },

    modules: {},
});
