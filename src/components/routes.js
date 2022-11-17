import loadable from '@loadable/component'
import {
    HomeOutlined,
    ProfileOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';


const Layout = loadable(() => import('./layouts/Layout'))
const Home = loadable(() => import('../pages/Home'))

// assembly
import TableGuide from '@/pages/assembly/guide/TableGuide'

const routes = [
    {
        element: <Layout />,
        meta: {},
        children: [
            {
                path: '/home',
                key: 'home',
                title: '首页',
                element: <Home />,
                icon: <HomeOutlined />
            }
        ] 
    },
    {
        element: <Layout />,
        meta: {
            title: '常用组件',
            key: 'assembly',
            icon: <ProfileOutlined />
        },
        children: [
            {
                path: '/assembly/guide',
                element: <TableGuide />,
                title: 'Table',
                key: 'guide',
                meta:{}
            },

        ]
    }
]

export default routes