import React, { useState } from 'react'
import { Card, Button } from 'antd';
import styles from './index.less'
import Loading from '@/components/loading'

const CssFunctionFiles  = () => {
    const [loading, setLoading] = useState<boolean>(false)
    

    return (
        <div>
            <Card title="loading效果">
                <Loading title='确定' loading={loading} style={{ color: '#1890ff' }}/>
                <div>
                    <Button onClick={() => setLoading(!loading)}>{loading ? '加载中' : '加载结束'}</Button>
                </div>
            </Card>
            <Card title="旋转小球">
                <div className={styles.box1}>
                    
                </div>
            </Card>
        </div>
    )
}

export default CssFunctionFiles