//state
//this is the state of the module
//getters
//return some particular data from the store
//mutations
//write data to the store or mutate state
//actions
//any functionality before mutating

export default {
    namespaced: true,
    state: {
        profiles: [],
        creatingProfile: false
    },
    getters: {
        GET_PROFILE: state => name =>
            state.profiles.filter(profile => profile.firstName == name)[0]
    },
    mutations: {
        SET_PROFILES(state, profiles) {
            state.profiles = profiles;
        },
        START_CREATING_PROFILE(state) {
            state.creatingProfile = true;
        },
        ADD_PROFILE(state, profile) {
            state.profiles.push(profile);
            state.creatingProfile = false;
        }
    },
    actions: {
        LOAD_PROFILES({ commit }, api) {
            api.get("Profile").then(res => {
                commit("SET_PROFILES", res.data);
            });
        },
        CREATE_PROFILE({ commit, dispatch }, payload) {
            let { api, form } = payload;
            commit('START_CREATING_PROFILE');

            api.post("Profile", form).then(res => {
                commit("ADD_PROFILE", res.data);
                dispatch("popup/DISPLAY_POPUP", "Profile Created", { root: true })
            });
        }
    }
}