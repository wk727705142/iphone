//邀请有礼
import React,{Component} from "react";
import './Invitation/font/iconfont.css'
import './Invitation/css/Invitation.css'
class Invitation extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className="my">
        <div className="in_head">
            <i className='iconfont icon-back' onClick={this.Back.bind(this)}></i> 
            {/* <i className='iconfont icon-back'></i> */}
            <p className='in_title'>邀请有礼</p>
            <i className='iconfont icon-guize' onClick={this.goTo.bind(this)}></i>
        </div>
            <div className="top">
                <dl>
                    <dt>
                        <img src={require('./Invitation/image/u1978.png')} alt="" />
                    </dt>
                    <dd>
                        <p className='inv'>邀请即得</p>
                        <p className='price'>￥100优惠券</p>
                        <button className='btn'>立即邀请</button>
                    </dd>
                </dl>
            </div>
            <div className="bottom">
                <dl>
                    <dt><i className='iconfont icon-guanliyuan'></i></dt>
                    <dd onClick={this.goInfo.bind(this)}>
                        <p>成功邀请</p>
                        <p><span className='green'>10</span>人</p>
                    </dd>
                </dl>
                <dl>
                    <dt><i className='iconfont icon-youhuiquanicon'></i></dt>
                    <dd onClick={this.goInfo.bind(this)}>
                        <p>累计奖励</p>
                        <p><span className='green'>1000.00</span>元</p>
                    </dd>
                </dl>
            </div>
        </div>
    }
    Back(){
        const {history} = this.props;
        history.go(-1);
    }
    goTo() {
        const { history } = this.props
        history.push({
            pathname: '/Instructions'
        })
    }
    goInfo() {
        const { history } = this.props
        history.push({
            pathname: '/Reward'
        })
    }
}

export default Invitation