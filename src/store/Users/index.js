import { ServiceApi } from "../../Services/auth";

const state = () => ({
    users: [],
})

const actions = {
    async list({ commit }, params = {}) {
        try {
            const data = (await ServiceApi.get('api/users', params)).data
            commit('SET_USERS', data)
            return data
        } catch (error) {
            commit('setUser', null)
            return error
        }
    },

    async store({ commit }, payload) {
        try {
            const resp = await ServiceApi.post(`api/users`, payload)
            commit('ADD_USERS', resp.data)
            return resp
        } catch (error) {
            return error
        }
    },
    async update({ dispatch }, { payload, client }) {
        try {
            const data = await ServiceApi.put(`api/user/${client.id}`, payload)
            if (data.status == 200) {
                dispatch('users/list', {}, { root: true })
            }
            return data
        } catch (error) {
            return error
        }
    },
    async delete({ commit }, id) {
        try {
            const data = await ServiceApi.delete(`api/user/${id}`)
            if (data.status == 200) {
                commit('SPLICE_USERS', id)
            }
            return data
        } catch (error) {
            return error
        }
    }
}

const getters = {
    users: (state) => state.users,
}

const mutations = {
    SET_USERS(state, payload) {
        state.users = payload
    },
    SPLICE_USERS(state, payload) {
        if (Array.isArray(state.users.data)) {
            state.users.data = state.users?.data.filter((item) => item.id !== payload)
        }
    },
    ADD_USERS(state, payload) {
        state.users.data ? state.users?.data?.unshift(payload.data) : state.users?.unshift(payload.data)
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
