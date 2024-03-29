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
import EditTable from '@/pages/assembly/editTable/index'
// css样式功能
import CssFunctionFile from '@/pages/cssFunctionFile'

// html功能组件
import HtmlFunctionTags from '@/pages/htmlFunctinoTag'
import BraftEditor from '@/components/braftEditor/BraftEditorComponent'

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
            },
            {
                path: '/assembly/braft-editor',
                element: <BraftEditor />,
                title: '富文本编辑器',
                key: 'braft-editor',
                meta:{}
            },
            {
                path: '/assembly/editTable',
                element: <EditTable />,
                title: '可编辑表格',
                key: 'editTable',
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
            }
        ]
    },
]

export default routes