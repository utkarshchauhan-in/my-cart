import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        myCart: [],
        productList: [],
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
