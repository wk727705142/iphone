//意见反馈
import React,{Component} from "react";
import "./Feedback/icon/iconfont.css"
import "./Feedback/Feedback.css"
import multer from "multer"

class Feedback extends Component {
    constructor(props){
        super(props)
        this.state = {
            display_names:'none',
            msg:[
                "申请问题","审核问题","合同问题","app优化建议","产品建议","商务合作","其它"
            ],
            num:0,
            text:""
        }
        //this.dj = this.dj.bind(this)
    }

    ht(){
        this.props.history.go(-1)
    }

    backlogin(){
        this.setState({display_names:'block'})
    }

    xc(){
        this.setState({display_names:'none'})
    }

    dj(index){
        this.setState({
            num : index,
            text : this.state.msg[index]
        })
    }

    ok(){
        var index = this.refs.text;
        index.innerHTML = this.state.text;
        this.setState({display_names:'none'})
    }

    render(){
        console.log(multer);
        return <div className="my">
            <header className="Feedback_header">
                <i className="iconfont icon-back" id="Feedback_A" onClick={this.ht.bind(this)}></i>
                <a className="Feedback_title">意见反馈</a>
                <i id="Feedback_A"></i>
            </header>
            <div className="Feedback_body">
                <div className="Feedback_type">
                    <i id="Feedback_C"></i>
                    <a className="Feedback_casetype" onClick={this.backlogin.bind(this)} style={{outline:'none'}} ref="text">请选择反馈类型</a>
                    <i className="iconfont icon-more" id="Feedback_B"></i>
                </div>
                <textarea id="Feedback_text" defaultValue="请写下您对**金服的感受，我们将认真听取您的意见，努力提供更优质的服务。"></textarea>
                <input className="Feedback_input" type="text" placeholder="手机/邮箱/QQ(选填)" />
            </div>
            <div className="Feedback_bodytow">
                <h5 className="Feedback_h4">上传图片(最多6张)</h5>
                <div className="Feedback_imgs">
                    <li className="Feedback_lis">
                        <b>+</b>
                    </li>
                </div>
            </div>
            <div className="Feedback_footer">
                <button className="Feedback_button">提交</button>
            </div>
            <div className="zzc" style={{display:this.state.display_names}}>
                <div className="context">
                    <div className="headers">
                        <span onClick={this.xc.bind(this)}>取消</span>
                        <a>反馈类型</a>
                        <span onClick={this.ok.bind(this)}>确定</span>
                    </div>
                    <div className="bodys">
                        {
                            this.state.msg.map((item,key)=>{
                                return <li key={key} onClick={this.dj.bind(this,key)} className={this.state.num === key?"dj":""}>{item}</li>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Feedback