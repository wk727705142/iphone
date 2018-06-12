//奖励明细页
import React,{Component} from "react";
import './css/Reward.css'
import axios from 'axios'
import BScroll from 'better-scroll'
class Reward extends Component {
    constructor(props){
        super(props)
        this.state={
            detail:null
        }
    }
    render(){
        const {detail} = this.state
        return <div className="my">
            <div className="rew_head">
                <i className='iconfont icon-back' onClick={this.goBack.bind(this)}></i>
                <p className='in_title'>奖励明细</p>
                <i></i>
            </div>
            <div className="rew_con" ref='rew_con'>
                <div className='rew_box'> 
                    <div className="rew_bot">
                        <dl>
                            <dt><i className='iconfont icon-guanliyuan'></i></dt>
                            <dd>
                                <p>成功邀请</p>
                                <p><span className='green'>10</span>人</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt><i className='iconfont icon-youhuiquanicon'></i></dt>
                            <dd>
                                <p>累计奖励</p>
                                <p><span className='green'>1000.00</span>元</p>
                            </dd>
                        </dl>
                     </div> 
                    <div className="rew_bott">
                        <div className="rew_l">
                            <h4>奖励明细</h4>
                            {
                                detail != null && detail.map((item, index) => {
                                    return (
                                        <dl key={index}>
                                            <dt>
                                                <img src={item.img} alt="" />
                                            </dt>
                                            <dd>
                                                <div className="rew_left">
                                                    <p>{item.name}</p>
                                                    <p>{item.num}</p>
                                                </div>
                                                <div className="rew_right">
                                                    <p>类型:{item.type}</p>
                                                    <p>时间:{item.time}</p>
                                                </div>
                                            </dd>
                                        </dl>
                                    )
                                })
                            }
                        </div>
                    </div>
               </div>
            </div>
        </div>
    }
    goBack() {
        const { history } = this.props;
        history.go(-1);
    }
    componentDidMount(){
        let Scroll = new BScroll(this.refs.rew_con, {
            startY: 0,
            scrollY: true,
            click: true
        })
        axios.get('/api/data1').then((res) => {
             
            this.setState({
                detail:res.data
            })
        })
    }
}

export default Reward