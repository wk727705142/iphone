//这是版本说明

import React ,{Component} from "react";
import './css/style.css'
import img2 from './img/2.png'
class Releasenotes extends Component {
    constructor(props){
        super(props)
        this.back = this.back.bind(this)
    }
    render(){
        return <div className="my">
        <header className='Header'><span onClick={this.back} className='left'><i className='icon iconfont icon-xiangzuo'></i></span><p>版本说明</p><span></span></header>
        <section className='about'>
        <div className='img'><img src={img2}/></div>
        <div style={{marginTop:'15px'}}><p>版本不息 优化不止</p></div>
        </section>
        </div>
    }
    back(){
        this.props.history.go(-1)
    }
}

export default Releasenotes