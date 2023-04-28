import React, { Component } from 'react'
import BraftEditor from 'braft-editor'


class BreaftEditorComponent extends Component {
    constructor(props){
        super(props)
        this.myRefs = React.createRef()
    }
    state = {
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(this.props.value || null),
        height: 200
    }

    componentDidMount(){
        return () => {
            this.unbindEvents();
        };
    }

    bindEvents = () => {
        document.addEventListener("mouseup", this.onMouseUp);
        document.addEventListener("mousemove", this.onMouseMove);
        document.addEventListener("mouseleave", this.onMouseUp);
    };
    unbindEvents = () => {
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("mousemove", this.onMouseMove);
        document.removeEventListener("mouseleave", this.onMouseUp);
    };

    // 鼠标按下获取起始高度
    onMouseDown = (event) => {
        const { editorState } = this.state
        console.log('我被点击了')
        event.stopPropagation();
        event.preventDefault();
        console.log(!editorState.isEmpty() ? editorState.toHTML() : '111111111111111' )
        const clientY = event.clientY;

        // 起始位置
        this.myRefs.current = clientY
        this.bindEvents();
    }

    // 鼠标移动 计算宽高并更新元素style
    onMouseMove = event => {
        const { height } = this.state 
        event.stopPropagation();
        event.preventDefault();

        const clientY = event.clientY;
        const clientHeight = height + clientY - this.myRefs.current

        this.setState({ height: clientHeight < 200 ? 200 : clientHeight },() => this.myRefs.current = event.clientY)
    };

    // 鼠标释放后解绑事件  
    onMouseUp = event => {
        this.unbindEvents();
        this.myRefs.current = null
    }

    handleChange = (editorState) => {
        if(!editorState.isEmpty()){
            console.log(editorState.toHTML(),'打印html')
            this.setState({ editorState })
        }else{
            console.log(editorState,'打印')
        }
    }

    render(){
        const {  } = this.props
        const { editorState, height } = this.state

        return (
            <div>
                <p>富文本编辑器</p>
                <div>
                    <BraftEditor
                        value={editorState}
                        onChange={this.handleChange}
                        controls={[]}   // 指定编辑器工具栏的功能控件列表string[]
                        excludeControls={[]}    // 指定不需要展示的工具项string[]
                        contentStyle={{ height, paddingBottom: 0 }}
                        style={{ border: '1px solid #ccc'}}
                    />
                    <p
                        style={{ height: 20, background: '#ccc', textAlign: 'center' }}
                        onMouseDown={this.onMouseDown}
                    >点击我拖拽改变大小</p>
                </div>
            </div>
        )
    }
}

export default BreaftEditorComponent