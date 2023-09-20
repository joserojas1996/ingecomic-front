import { ServiceApi } from "../../Services/auth";

const state = () => ({
    sections: [],
})

const actions = {
    async listSections({ commit }, params = {}) {
        try {
            const data = (await ServiceApi.get('api/sections', params)).data
            commit('SET_SECTIONS', data)
            return data
        } catch (error) {
            commit('setUser', null)
            return error
        }
    },

    async storeSections({ commit }, payload) {
        try {
            const resp = await ServiceApi.post(`api/sections`, payload)
            commit('ADD_SECTIONS', resp.data)
            return resp
        } catch (error) {
            return error
        }
    },
    async updateSections({ dispatch }, { payload, client }) {
        try {
            const data = await ServiceApi.put(`api/section/${client.id}`, payload)
            if (data.status == 200) {
                dispatch('Sections', {}, { root: true })
            }
            return data
        } catch (error) {
            return error
        }
    },
    async deleteSections({ commit }, id) {
        try {
            const data = await ServiceApi.delete(`api/section/${id}`)
            if (data.status == 200) {
                commit('SPLICE_SECTIONS', id)
            }
            return data
        } catch (error) {
            return error
        }
    }
}

const getters = {
    sections: (state) => state.sections,
}

const mutations = {
    SET_SECTIONS(state, payload) {
        state.sections = payload
    },
    SPLICE_SECTIONS(state, payload) {
        if (Array.isArray(state.sections.data)) {
            state.sections.data = state.sections?.data.filter((item) => item.id !== payload)
        }
    },
    ADD_SECTIONS(state, payload) {
        state.sections.data ? state.sections?.data?.unshift(payload.data) : state.sections?.unshift(payload.data)
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
