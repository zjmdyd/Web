const routes = [
    {
        name: 'a',
        path: '/a',
        component: ()=>import('@/views/vue-view-A')
    },
    {
        name: 'b',
        path: '/b',
        component: ()=>import('@/views/vue-view-B')
    },
    {
        name: 'Home',
        path: '/home',
        component: ()=>import('@/views/HomeComp')
    },
    {
        name: 'About',
        path: '/about',
        component: ()=>import('@/views/AboutComp')
    },
    {
        name: 'NotFound',
        path: '/notFound',
        component: ()=>import('@/views/NotFound')
    }
]

export default routes