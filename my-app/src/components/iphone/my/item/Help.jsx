//帮助中心
import React,{Component} from "react";

// 样式
import './Help/font/iconfont.css'
import "./Help/css/style.css";


import axios from 'axios';
console.log(axios);


class Help extends Component {
    constructor(props){
        super(props)
        this.zaixian = this.zaixian.bind(this)
        // this.state={
        //     arr:[],
        //     brr:[]
        // }
    }
    componentDidMount(){
        // axios.get('/data').then((res)=>{
        //     this.setState({
        //         arr:res.data.list,
        //         brr:res.data.questions
        //     })
        // })
    }  
    zaixian(){
        this.props.history.push('/Customerservice')
    }
    render(){
        // let {arr} = this.state;
        // let {brr} = this.state;
        return <div className="my">
            <div className="head">
                <span className="iconfont">&#xe653;</span>
                <span>服务中心</span>
            </div>
            <div className="section">
                <dl>
                    <dt><span className="iconfont">&#xe6c5;</span></dt>
                    <dd onClick={this.zaixian}>在线客服</dd>
                </dl>
                <dl>
                    <dt><span className="iconfont">&#xe6b1;</span></dt>
                    <dd>客服热线</dd>
                </dl>
            </div>
            {/* <div className="foot">
                {
                    <h3>{brr}</h3>
                }
                {
                    arr.map((item,index) => {
                        return <ul key={index}>
                            <li>
                                <span>{item.ask}</span>
                                <span>{item.question}</span>
                            </li>
                        </ul>
                    })
                }
            </div> */}
        </div>
    }
}

export default Help