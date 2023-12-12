// 加载中loading效果
import React from 'react'
import styles from './index.less'

interface loadingProps {
    title?: string;
    style?: object;
    loading?: boolean;
}

const LoadingComponent: React.FC<loadingProps> = (props) => {
    const {
        title,
        style = {},
        loading = false
    } = props

    return (
        <span id='loading' style={style}>
            <span className={styles.loading_content} style={{ display: loading ? 'inline-block' : 'none' }}/>
            <span className={styles.loading_title}>{title}</span>
        </span>
    )
}

export default LoadingComponent