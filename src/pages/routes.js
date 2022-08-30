import loadable from '@loadable/component'
import {
    HomeOutlined,
    ProfileOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const Home = loadable(() => import('../pages/Home'))
const MattersList = loadable(() => import('../pages/mattersList'))

export default [
    {
        key: 'home',
        label: '首页',
        icon: <HomeOutlined />,
        children: [
            {
                key: 'homeItem',
                label: '首页1',
                path: '/',
                element: <Home />,
            },
        ]
    },
    {
        key: 'matters',
        label: '事项清单',
        icon: <ProfileOutlined />,
        children: [
            {
                key: 'mattersList',
                label: '代办事项',
                path: '/mattersList',
                element: <MattersList />,
            },
        ]
    },
]