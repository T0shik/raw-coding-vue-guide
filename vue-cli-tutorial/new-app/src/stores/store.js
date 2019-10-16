import Vue from "vue"
import Vuex from "vuex"

import profiles from './modules/profiles'
import popup from './modules/popup'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        appReady: false
    },
    mutations: {
        READY_APP(state) {
            state.appReady = true;
        }
    },
    actions: {
        INIT_APP({ commit }) {
            setTimeout(function () {
                commit("READY_APP");
            }, 3000);
        }
    },
    modules: {
        profiles,
        popup
    }
})