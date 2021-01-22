import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/data.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)

firebase.initializeApp({
    apiKey: 'AIzaSyC4vAAvaKSKzic4o1HjwsBZE_GoF-kyLms',
    authDomain: 'vue-crm-f26ce.firebaseapp.com',
    databaseURL: 'https://vue-crm-f26ce.firebaseio.com',
    projectId: 'vue-crm-f26ce',
    storageBucket: 'vue-crm-f26ce.appspot.com',
    messagingSenderId: '588074936181',
    appId: '1:588074936181:web:3c63041ba456965b9c953c',
    measurementId: 'G-HEHBJV9QZ5'
})

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})