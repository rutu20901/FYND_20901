import Home from './components/Home.vue';
import Login from './components/Login.vue';
import {createRouter,createWebHistory} from 'vue-router'; 


const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'Login',
        components:Login,
        path:'/Login'
    }
    
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;