//系统设置

import React,{Component} from "react";
import { history} from 'react-router-dom'
import './settings/css/fonts/iconfont.css'
import './settings/css/style.css'
class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {
              display_name:'none',
              display_names:'none',
              MB:'10.00MB'
              
        }
        this.back = this.back.bind(this)
        this.aboutwe = this.aboutwe.bind(this)
        this.releasenotes = this.releasenotes.bind(this)
        this.changepass = this.changepass.bind(this)
        this.backlogin = this.backlogin.bind(this)
        this.sure = this.sure.bind(this)
        this.notsure = this.notsure.bind(this)
        this.clear = this.clear.bind(this)
       
    }
    render(){
        return <div className="my">
            <header className='Header'><span onClick={this.back} className='left'><i className='icon iconfont icon-xiangzuo'></i></span><p>系统设置</p><span></span></header>
            <section>
                <ul>
                    <li onClick={this.clear}><p className='left'>清除缓存</p><p className='right'><span>{this.state.MB}</span><span><i className='icon iconfont icon-chevron-thin-right'></i></span></p></li>
                    <li onClick={this.aboutwe}><p className='left'>关于我们</p><p className='right'><span></span><span><i className='icon iconfont icon-chevron-thin-right'></i></span></p></li>
                    <li onClick={this.releasenotes}><p className='left'>版本说明</p><p className='right'><span></span><span><i className='icon iconfont icon-chevron-thin-right'></i></span></p></li>
                    <li onClick={this.changepass}><p className='left'>修改密码</p><p className='right'><span></span><span><i className='icon iconfont icon-chevron-thin-right'></i></span></p></li>
                </ul>
                <div className='back' onClick={this.backlogin}><button style={{outline:'none'}}>退出登录</button></div>
            </section>
            <div className='clear' style={{display:this.state.display_names}} ref='clear'>
              <p>正在清除√</p>
            </div>
            <div className='zhez' ref='box' style={{display:this.state.display_name}}>
             <div className='maxs'></div>
             <div className='areok'>
             <p>确定要退出当前账号吗？</p>
             <p style={{color:"red"}} onClick={this.sure}>确定</p>
             <p style={{borderBottom:'none'}} onClick={this.notsure}>取消</p>
             </div>
            </div>
        </div>
    }
   
    back(){
       
       this.props.history.push('/my')
    }
    aboutwe(){
        this.props.history.push('/Aboutus')
    }
    releasenotes(){
        this.props.history.push('./Releasenotes')
    }
    changepass(){
        this.props.history.push('./Changepass')
    }
    backlogin(){
       this.setState({display_name:'block'})
    }
    sure(){
        this.props.history.push('/Login')
    }
    notsure(){
        this.setState({display_name:'none'})
    }
    clear(){
        
       this.setState({display_names:'block'}) 
       //console.log(this.refs.clear)
       let that =this
       this.timer = setTimeout(function(){
           that.setState({MB:'00.00MB'})
           that.refs.clear.style.display='none'
       },2000)
      
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    }
}

export default Settings