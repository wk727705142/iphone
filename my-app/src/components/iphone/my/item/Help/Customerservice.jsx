//客服中心
import React,{Component} from "react";

// 样式
import './font/iconfont.css'
import "./css/style.css";

class Customerservice extends Component {
    constructor(props){
        super(props)
        this.back = this.back.bind(this)
    }
    back(){
        this.props.history.push('/Help')
    }
    render(){
        return <div className="my">
            <div className="dayi">
                <span className="iconfont" onClick={this.back}>&#xe653;</span>
                <span>在线客服</span>
            </div>
            <div className="daer">
                <h5>小优为您服务</h5>
            </div>
        </div>
    }
}

export default Customerservice