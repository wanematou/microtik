import { createRouter, createWebHashHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import Signuppage from './components/SignUpPage.vue'

const routes=[
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        component:LoginPage
    },
    {
        path:'/signup',
        component:Signuppage
    }

]
export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes: routes,
})