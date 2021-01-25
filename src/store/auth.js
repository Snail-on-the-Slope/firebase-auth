import firebase from 'firebase/app'

export default {
    actions: {
        async login(ctx, { email, password }) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                ctx.commit('setError', e)
                throw e
            }
        },
        async register(ctx, { email, password, name, phone }) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await ctx.dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name,
                    phone
                })
            } catch (e) {
                ctx.commit('setError', e)
                throw e
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout(ctx) {
            await firebase.auth().signOut()
            ctx.commit('clearInfo')
        }
    }
}