import React,{Component} from "react";
import "./Nav.css"
import {BrowserRouter as Router,Route,Switch,Link,Redirect,withRouter} from "react-router-dom";
class Navview extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className="footer">
                <Link to="/Home">首页</Link>
                <Link to="/Order">订单</Link>
                <div onClick={this.skip.bind(this)}>我的</div>
        </div>  
    }
    skip(){
         if(sessionStorage.user){
            this.props.history.push("my")
         }else{
           
            this.props.history.push("login")
         }
    }
}
let Nav = withRouter(Navview)
export default Nav