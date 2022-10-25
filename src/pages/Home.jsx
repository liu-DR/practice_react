import React from 'react'
import { connect } from 'react-redux'
import {
    Button
} from 'antd'


class Home extends React.Component{
    state = {

    }

    async componentDidMount(){}

    render(){
        const {} = this.props
        const {} = this.state

        return(
            <div>
                <Button>前往待办事项清单</Button>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {

    return {
        ...props
    }
}

export default connect(mapStateToProps,{

})(Home)