//这是关于我们

import React ,{Component} from "react";
import './css/style.css'
import imgs from './img/1.png'

class Aboutus extends Component {
    constructor(props){
        super(props)
        this.back = this.back.bind(this)
    }
    render(){
        return <div className="my">
             <header className='Header'><span onClick={this.back} className='left'><i className='icon iconfont icon-xiangzuo'></i></span><p>关于我们</p><span></span></header>
             <section className='about'>
                 <div className='img'><img src={imgs}/></div>
                 <div style={{marginTop:'15px'}}><h1>**金服</h1></div>
                 <div className='box'>
                  <p>公司介绍: ***********</p>
                  <p>客服热线: 400-0000-000</p>
                  <p>客服邮箱: service@site.com</p>
                  <p>微信公众号: ****</p>
                  <p>官方QQ群: *****</p>
                  <p>当前版本: v4.0.0</p>
                 </div>
                 <div className='last'>
                 <p style={{color:'#62D2E7',marginTop:'30px'}}>《**金服用户协议》</p>
                 <p>CopyRight @**金服2015 - 2017</p>

                 </div>
             </section>
        </div>
    }
    back(){
       
        this.props.history.go(-1)
     }
}

export default Aboutus