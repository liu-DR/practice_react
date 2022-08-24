import loadable from '@loadable/component'
import {
    HomeOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const Home = loadable(() => import('../pages/Home'))

export default [
    {
        key: 'home',
        label: '首页',
        icon: <HomeOutlined />,
        children: [
            {
                key: 'homeItem',
                label: '首页1',
                path: '/home',
                element: <Home />,
            },
        ]
    },
    {
        key: 'workbench',
        label: '工作台',
        icon: <UserOutlined />,
        children: [
            {
                key: 'workbenchItem',
                label: '工作台1',
                path: '/home',
                element: <Home />,
            },
        ]
    },
]