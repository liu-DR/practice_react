import loadable from '@loadable/component'
import {
    HomeOutlined,
    ProfileOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';


const Layout = loadable(() => import('./Index'))
const Home = loadable(() => import('../pages/Home'))

const routes = [
    {
        element: <Layout />,
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
        title: '常用组件',
        element: <Layout />,
        children: [
            {
                path: '/assembly/guide',
                element: <Home />,
                title: '引导页',
                key: 'guide',
                icon: <ProfileOutlined />
            },

        ]
    }
]

export default routes