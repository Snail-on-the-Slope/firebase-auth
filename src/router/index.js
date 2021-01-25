import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     meta: { layout: 'main', auth: true },
    //     component: () =>
    //         import ('../views/Home.vue')
    // },
    {
        path: '/login',
        name: 'Lodin',
        meta: { layout: 'empty' },
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: { layout: 'empty' },
        component: () =>
            import ('../views/Register.vue')
    },
    {
        path: '/',
        name: 'Profile',
        meta: { layout: 'main', auth: true },
        component: () =>
            import ('../views/Profile.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requireAuth = to.matched.some(record => record.meta.auth)

    if (requireAuth && !currentUser) {
        next('/login?message=login')
    } else {
        next()
    }
})

export default router