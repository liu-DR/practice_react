import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
    Card,
    Form,
    Input,
    Upload,
    Select,
    DatePicker,
    Button,
    Modal
} from 'antd'
import styles from './style.less'



const CardForm = (props) => {
    const [data, setData] = useState<object[]>([])
    const [whether, setWhether] = useState<boolean>(false)

    useEffect(() => {

    },[])

    const showModel = () => {

    }

    return(
        <div className={styles.CardForm}>
            <div className={styles.cardFormContent}>
                <div>
                    <Button onClick={() => setWhether(true)}>登记交易所反馈意见</Button>
                </div>
            </div>


            {whether && <Modal
                visible={whether}
                title='登记交易所反馈意见情况'
                onCancel={() => setWhether(false)}
                footer={null}
            >
                
            </Modal>}
        </div>
    )
}



const mapStateToProps = (state, props) => {
    return{

    }
}

export default connect(mapStateToProps,{

})(CardForm)