import loadable from '@loadable/component'
import {
    HomeOutlined,
    ProfileOutlined,
    UserOutlined,
    VideoCameraOutlined,
    ProjectOutlined
} from '@ant-design/icons';


const Layout = loadable(() => import('./layouts/Layout'))
const Home = loadable(() => import('../pages/Home'))

// 常用组件
import TableGuide from '@/pages/assembly/guide/TableGuide'
import CardForm from '@/pages/assembly/cardForm/CardForm'

// 项目收支
import ProjectBlance from '@/pages/project/projectBlance/ProjectBlance';

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
            {
                path: '/assembly/cardForm',
                element: <CardForm />,
                title: '卡片表单',
                key: 'cardForm',
                meta:{}
            }
        ]
    },
    {
        element: <Layout />,
        meta: {
            title: '项目',
            key: 'project',
            icon: <ProjectOutlined />
        },
        children: [
            {
                path: '/project/blance',
                element: <ProjectBlance />,
                title: '项目收支',
                key: 'blance',
                meta:{}
            },

        ]
    }
]

export default routes