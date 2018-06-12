import React,{Component} from "react";
import "./My.css";
import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom";
import Nav from "../nav/Nav";
class My extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className="main">
                <div className="my-content">
                  <div className="header">
                  我的
                  <div className="Headportrait">

                  </div>
                  </div>
                  <ul>
                     <li><Link to="Certification">认证中心</Link></li>
                     <li><Link to="Recycling">回收记录</Link></li>
                     <li><Link to="Invitation">邀请有礼</Link></li>
                     <li><Link to="Bankcard">银行卡</Link></li>
                     <li><Link to="Help">帮助中心</Link></li>
                     <li><Link to="Feedback">意见反馈</Link></li>
                     <li><Link to="Settings">系统设置</Link></li>
                  </ul>
                </div>
               <Nav></Nav>
        </div>
    }
    componentDidMount(){
       
        if(sessionStorage.user){

        }else{
            this.props.history.push("Login")
        }
    }
}

export default My