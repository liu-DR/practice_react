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
        const data = [
            {age: 11, total: 10},
            {age: 12, total: 11},
            {age: 13, total: 12},
        ]
        let num = {}
        
        data.forEach(item => {
            for(let key in item){
                
                console.log(typeof(num[key]),'num[key]')
                num[key] = typeof(num[key]) === 'number' ? num[key]+item[key] : item[key]
            }
        })
        console.log(num,'打印num')
        return num

    }

    return(
        <div className={styles.CardForm}>
            <div className={styles.cardFormContent}>
                <div>
                    <Button onClick={() => showModel()}>登记交易所反馈意见</Button>
                </div>
                <Button>dwadwd</Button>
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