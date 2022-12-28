const routes = [
    // {
    //     name: 'mainPage',
    //     path: '/',
    //     component: ()=>import('@/views/mainPage')
    // },
    {
        name: 'a',
        path: '/a',
        component: ()=>import('@/views/vue-view-A')
    },
    {
        name: 'b',
        path: '/b',
        component: ()=>import('@/views/vue-view-B')
    }
]

export default routes