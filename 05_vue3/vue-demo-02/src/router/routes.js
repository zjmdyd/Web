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
    }
]

export default routes