import firebase from 'firebase/app'

export default {
    state: {
        info: null
    },
    mutations: {
        setInfo(state, info) {
            state.info = info
        },
        clearInfo(state) {
            state.info = null
        }
    },
    actions: {
        async fetchInfo(ctx) {
            try {
                const uid = await ctx.dispatch('getUid')
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                ctx.commit('setInfo', info)
            } catch (e) {
                ctx.commit('setError', e)
                throw e
            }
        },
        async updateInfo(ctx, toUpdate) {
            try {
                const uid = await ctx.dispatch('getUid')
                const updateData = {...ctx.getters.info, ...toUpdate }
                await firebase.database().ref(`/users/${uid}/info`).update(updateData)
                ctx.commit('setInfo', updateData)
            } catch (e) {
                ctx.commit('setError', e)
                throw e
            }
        }
    },
    getters: {
        info: s => s.info
    }
}