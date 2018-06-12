import React,{Component} from "react";
import "./Home.css"

class Fg extends Component {
    constructor(props){
        super(props)
        this.state = {
            num:0
        }
    }

    componentDidMount(){
       this.time = setInterval(()=>{
            this.setState({
                num : this.state.num+1
            })
            if(this.state.num>3){
                this.setState({
                    num : 0
                })
            }
        },2000)
    }

    componentWillUnmount(){
        clearInterval(this.time)
    }
    render(){
        return <div className="Fg">
                    <i className="iconfont" id="d">&#xe67b;</i>
                    <ul>
                        {
                            this.props.msg.tits.map((item,key)=>{
                                return <a key={key} className={key === this.state.num?"bloc":"non"}>{item.tit}</a>
                            })
                        }
                    </ul>
                    <div className="button"><span>详情</span></div>
                    <i className="zw"></i>
                </div>
    }
    
}

export default Fg