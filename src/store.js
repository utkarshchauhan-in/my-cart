import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        myCart: [],
        productList: [],
        searchList: null,
        next: 0,
        total: 0,
        range: 8
    },
    mutations: {
        ADD_PRODUCTS(state, data) {
            state.productList.push(...data.products);
            state.total=data.total;
            state.next++;
        },
        SET_PRODUCTS(state, data) {
            state.productList=[...data];
            state.next=1;
        },
        SEARCH_PRODUCTS(state, data) {
            state.searchList=data?[...data]:null;
        },
        ADD_TO_CART(state, data) {
            state.myCart.push(data);
        },
        REMOVE_FROM_CART(state, id) {
            state.myCart = state.myCart.filter(prod => prod.productId !== id)
        },
        INCREMENT_NEXT(state) {
            state.next++;
        },
    },
    actions: {
        addProducts({ commit }, products) {
            commit('ADD_PRODUCTS', products)
        },
        searchProducts({ commit }, products) {
            commit('SEARCH_PRODUCTS', products)
        },
        setProducts({ commit }, products) {
            commit('SET_PRODUCTS', products)
        },
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product)
        },
        removeFromCart({ commit }, productId) {
            commit('REMOVE_FROM_CART', productId)
        },
        incrementNext({ commit }) {
            commit('INCREMENT_NEXT')
        },
    },
    getters: {
        getProducts: state => {
            return state.productList;
        },
        getCart: state => {
            return state.myCart;
        },
        getNext: state => {
            return state.next;
        },
        getRange: state => {
            return state.range;
        },
        getTotal: state => {
            return state.total;
        }
    }
})
