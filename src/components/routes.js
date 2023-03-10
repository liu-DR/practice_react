import loadable from '@loadable/component'
import {
    HomeOutlined,
    ProfileOutlined,
    ProjectOutlined,
    Html5Outlined,
    BgColorsOutlined 
} from '@ant-design/icons';


const Layout = loadable(() => import('./layouts/Layout'))
const Home = loadable(() => import('../pages/Home'))

// 常用组件
import TableGuide from '@/pages/assembly/guide/TableGuide'
import CardForm from '@/pages/assembly/cardForm/CardForm'
import CheckTag from '@/pages/assembly/checkTag/CheckTag'

// 项目收支
import ProjectBlance from '@/pages/project/projectBlance/ProjectBlance';

// css样式功能
import CssFunctionFile from '@/pages/cssFunctionFile'

// html功能组件
import HtmlFunctionTags from '@/pages/htmlFunctinoTag'

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
            },
            {
                path: '/assembly/checkTag',
                element: <CheckTag />,
                title: '标签Tags',
                key: 'checkTag',
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
    },
    {
        element: <Layout />,
        meta: {
            title: 'css样式',
            key: 'cssProject',
            icon: <BgColorsOutlined  />
        },
        children: [
            {
                path: '/cssProject/cssStyle',
                element: <CssFunctionFile />,
                title: 'cssStyle',
                key: 'cssStyle',
                meta:{}
            },

        ]
    },
    {
        element: <Layout />,
        meta: {
            title: 'html功能',
            key: 'htmlProject',
            icon: <Html5Outlined />
        },
        children: [
            {
                path: '/htmlProject/htmlTags',
                element: <HtmlFunctionTags />,
                title: 'html功能标签',
                key: 'htmlTags',
                meta:{}
            },

        ]
    },
]

export default routes