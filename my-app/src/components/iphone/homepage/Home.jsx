import React,{Component} from "react";
import "./Home.css";
import axios from 'axios';
import "./fonts/iconfont.css"
import Lunbo from "./Lunbo.jsx"
import Fg from "./Fg.jsx"
import Nav from "../nav/Nav"


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg:{imgs:[],tits:[],phoneMessage:[]}
        }
    }

    componentDidMount(){
        axios.get('/menu').then((res)=>{
            this.setState({
                msg : res.data
            })
        })
    }

    ld(){
        if(sessionStorage.getItem("user")===null){
            this.props.history.push('/login')
        }
    }

    
    render(){
        return <div className="main">
                <header>
                    <i className="iconfont" id="a" onClick={this.ld.bind(this)}>&#xe713;</i>
                    <a className="title">{this.state.msg.name}</a>
                    <i className="iconfont" id="b">&#xe729;</i>
                    <i className="iconfont" id="c">&#xe638;</i>
                </header>
                <div className="body">
                    <Lunbo msg={this.state.msg}></Lunbo>
                    <Fg msg={this.state.msg}></Fg>
                    <div className="message">
                        <dl>
                            <dt>
                                {
                                    this.state.msg.phoneMessage.map((item,key)=>{
                                       return <img key={key} src={item.img} alt=""/>
                                    })
                                }
                            </dt>
                            <dd>
                                {
                                    this.state.msg.phoneMessage.map((item,key)=>{
                                       return <ul key={key}>
                                           <h2>{item.names}</h2>
                                           <h4>型号:{item.model}</h4>
                                           <h4>内存:{item.memory}</h4>
                                           <h4>最高回收价:{item.price}</h4>
                                       </ul>
                                    })
                                }
                            </dd>
                        </dl>
                    </div>
                    <div className="lalala">
                        <button>马上评估，立即拿钱</button>
                    </div>
                </div>
                <Nav></Nav>
        </div>
    }
    
}

export default Home