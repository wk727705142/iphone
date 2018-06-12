//此页面为注册页面

import React,{Component} from "react";
import SwitchExample from "./Switch.jsx";
import "./Register.css"
class Register extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className="login">
        <div style={{width:"100px",height:"30px"}}>
        <SwitchExample width="200"></SwitchExample>
        </div>
            
        </div>
    }
}

export default Register