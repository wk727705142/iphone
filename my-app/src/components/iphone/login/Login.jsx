//此页面为注册页面

import React,{Component} from "react";
import "./Login.css";
import Alert from "../../common/Alert";
import "./font/iconfont.css";
import axios from "axios";
import {connect} from "react-redux"
import {Asyncuser} from "../../../store/actions/loginAction"
import  Blert from "../../common/Alert.jsx";
class Loginview extends Component {
    constructor(props){
        super(props)
        this.state = {
            bol:false,
            user:"",
            pass:"",
            name:"",
            bgcolor:"#ccc"
        }
       
    }
    render(){
        
        return <div className="login">
            <div className="login-header"><i className="iconfont icon-guanbi" onClick={this.jumphome.bind(this)}></i></div>
            <div className="login-logo">
                <i className="iconfont icon-yuan" id="login-outside"><i className="iconfont icon-yuan" id="login-insert"></i></i>
            </div>
            <div className="login-information">
                <p><i className="iconfont icon-mingpian" id="login-user"></i><input type="text" placeholder="手机号码" value={this.state.user} onChange={(e)=>{
                        this.setState({
                            user:e.target.value,
                            bol:false
                        })
                }}/></p>
                <p><i className="iconfont icon-suo" id="login-pass"></i><input type="password" placeholder="登陆密码" value={this.state.pass} onChange={(e)=>{
                    this.setState({
                        pass:e.target.value,
                        bol:false
                    })
                }}/></p>
            </div>
            <div className="login-content">
                <p className="login-mima"><a onClick={this.forgetpass.bind(this)}>忘记密码</a></p>
                <p><button id="login-lg" onClick={this.login.bind(this)}>登陆</button></p>
                <p><button onClick={this.createuser.bind(this)}>创建账户</button></p>
            </div>
            <div className="login-other">
                       <div className="login-inline">
                        <span>OR</span>
                       </div> 
                       <p><i className="iconfont icon-weixin" id="login-weixin"></i><button>微信账号创建</button></p>
                       <p><i className="iconfont icon-tubiao214" id="login-weibo"></i><button>微博账号创建</button></p>
            </div>
            
            <Blert bol={this.state.bol} name={this.state.name} bgcolor={this.state.bgcolor}></Blert>
        </div>
    }
    componentDidMount(){
        // axios({
        //     url:"/user",
        //     method:"GET"
        // })
        // .then((res)=>{
        //     console.log(res)
        // })
        this.props.GetUser()
        
    }
    componentDidUpdate(){
        
    }
    jumphome(){
        
       this.props.history.push("Home")
            
        
    }
    createuser(){
        this.props.history.push("Register")
    }
    forgetpass(){
        this.props.history.push("Resetpass")
    }
    login(){
        if(this.state.user=== "" || this.state.pass === ""){
            this.setState({
                bol:true,
                name:"请输入账号密码",
                bgcolor:"#f76262"
            })
        }else{
            for( var i=0;i<this.props.user.length;i++){
                if(this.props.user[i].name == this.state.user && this.props.user[i].pass == this.state.pass){
                    sessionStorage.setItem("user",this.state.user)
                    this.props.history.push("my")
                    break;
                }else{
                    this.setState({
                        bol:true,
                        name:"账号密码错误",
                        bgcolor:"#f76262"
                    })
                    break;
                   
                }
            }
                
                
            
        }
    }
}

let Login = connect((state)=>{
    
    return {
        user:state.Login
    }
},(dispatch)=>{
    return {
        GetUser(){
            dispatch(Asyncuser(dispatch))
        }
    }
})(Loginview)
export default Login