//修改密码页
import React ,{Component} from "react";
import './css/style.css'

class Changepass extends Component {
    constructor(props){
        super(props)
        this.back = this.back.bind(this)
    }
    render(){
        return <div className="my">
            <header className='Header'><span onClick={this.back} className='left'><i className='icon iconfont icon-xiangzuo'></i></span><p>修改密码</p><span className='right' style={{color:'#1ABC9C'}}>完成</span></header>
           <section>
               <p className='pass'><span className='one'>旧密码</span><span><input type='text' placeholder='请输入旧密码'/></span></p>
               <p className='pass'><span className='one'>新密码</span><span><input type='text' placeholder='请输入新密码(6至20位数或者字母)'/></span></p>
               <p className='pass'><span className='one'>确认密码</span><span><input type='text' placeholder='请再次输入新密码'/></span></p>
           </section>
        </div>
    }
    back(){
       
        this.props.history.go(-1)
     }
}

export default Changepass