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
        async fetchInfo({ dispatch, commit, state }) {
            try {
                console.log('fetchInfo', state.info)
                const uid = await dispatch('getUid')
                console.log('fetchInfo---------------', await firebase.database().ref(`/users/${uid}/info`))
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                console.log('fetchInfo2222', info)
                commit('setInfo', info)
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async updateInfo({ dispatch, commit, getters }, toUpdate) {
            try {
                const uid = await dispatch('getUid')
                const updateData = {...getters.info, ...toUpdate }
                await firebase.database().ref(`/users/${uid}/info`).update(updateData)
                commit('setInfo', updateData)
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    },
    getters: {
        info: s => s.info
    }
}