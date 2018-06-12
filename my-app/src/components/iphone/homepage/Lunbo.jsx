import React,{Component} from "react";
import "./Home.css"
class Lunbo extends Component {
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
            if(this.state.num>6){
                this.setState({
                    num : 0
                })
            }
        },1500)
    }

    componentWillUnmount(){
        clearInterval(this.time)
    }

    render(){
        return <div className="Lunbo">
                    <ul>
                        {
                            this.props.msg.imgs.map((item,key)=>{
                                return <li key={key} className={key === this.state.num?"block":"none"}>
                                    <img src={item.img} alt=""/>
                                </li>
                            })
                        }
                    </ul>
                    <ol>
                        {
                            this.props.msg.imgs.map((item,key)=>{
                                return <li key={key} className={key === this.state.num?"blocks":"nones"}></li>
                            })
                        }
                    </ol>
                </div>
    }
    
}

export default Lunbo