import { createRouter, createWebHistory } from 'vue-router';

/*const routes = [
    { path: '/', component:  },
    { path: '/', component:  },
    { path: '/', component: }
]*/

const router = createRouter({
    history: createWebHistory('/app/'),
    routes,
})

export default router