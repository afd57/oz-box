import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state = {
    wishList: [{
        header: "Header 1",
        message: "Wish 1",
        date: "2020-05-01 20:12"
    }]
};

const getters = {
    getWishList(state) {
        return state.wishList;
    }
};

const mutations = {
    addWish(state, wishData) {
        state.wishList.push(wishData);
    }
};

const actions = {
    addActionWish({ commit }, wishData) {
        commit('addWish', wishData);
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
export default store;