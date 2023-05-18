import React from 'react'
import { Card } from 'antd';
import styles from './index.less'

const CssFunctionFiles  = () => {

    return (
        <div>
            <Card title="loading效果">
                <div style={{ padding: '0 20px' }}>
                    <span
                        className={styles.dataLoading}
                   />
                   <span>loading</span>
                </div>
            </Card>
            
        </div>
    )
}

export default CssFunctionFiles