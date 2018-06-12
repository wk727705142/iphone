//规则说明
import React,{Component} from "react";
import './css/Instructions.css';
import axios from 'axios';
import BScroll from 'better-scroll';
class Instructions extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }
    render(){
        const { list } = this.state;
        return <div className="my">
            <div className="instru_head">
                <i className='iconfont icon-back' onClick={this.goBack.bind(this)}></i>
                <p className='in_title'>邀请好友规则介绍</p>
                <i></i>
            </div>
            <div className="content" ref='content'>
                <div className="wrapper">
                    {
                        list.map((item, index) => {
                            return (
                                <p key={index}>
                                    {item.text}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    }
    goBack() {
        const { history } = this.props;
        history.go(-1);
    }
    componentDidMount() {
        
        let Scroll = new BScroll(this.refs.content, {
            startY: 0,
            scrollY: true,
            click: true
        })
        axios.get('/api/data').then((res) => {
             
            this.setState({
                list: res.data
            })
        })

    }
}

export default Instructions