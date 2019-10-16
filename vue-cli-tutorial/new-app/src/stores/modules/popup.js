export default {
    namespaced: true,
    state: {
        message: "",
        display: false,
        timeout: null
    },
    mutations: {
        SET_MESSAGE(state, message) {
            state.message = message
            state.display = true;
        },
        HIDE_MESSAGE(state) {
            state.display = false;
        },
        SET_TIMEOUT(state, timeout) {
            state.timeout = timeout;
        },
        CLEAR_TIMEOUT(state) {
            clearTimeout(state.timeout);
            state.timeout = null;
        }
    },
    actions: {
        DISPLAY_POPUP({ commit, state, dispatch }, message) {
            if (state.timeout !== null) {
                commit('CLEAR_TIMEOUT')
                commit('HIDE_MESSAGE')
                setTimeout(function () {
                    dispatch('DISPLAY_POPUP', message)
                }, 100);
            } else {
                commit('SET_MESSAGE', message)

                let timeout = setTimeout(function () {
                    commit('HIDE_MESSAGE')
                }, 3000);

                commit('SET_TIMEOUT', timeout);
            }
        }
    }
}