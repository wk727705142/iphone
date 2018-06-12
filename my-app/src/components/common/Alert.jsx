import React,{Component} from "react";

class Alert extends Component {
    constructor(props){
        super(props)
        this.state = {
            bol:this.props.bol
        }
    }
    render(){
        let {name,fontcolor,bgcolor} = this.props
       
        return (
            <p className={(this.state.bol?"active":"hidd")+" alert"} style={{color:fontcolor,backgroundColor:bgcolor}} ref={(e)=>{
            }} onTransitionEnd={()=>{
                window.flg = true
            }}>{name}</p>
        )   
    }
    componentWillReceiveProps(nextprops){
        this.setState({
            bol:nextprops.bol
        })
    }
    componentDidUpdate(){
      var timer = setTimeout(()=>{
            this.setState({
                bol:false
            })
        },2000)
        if(!this.state.bol){
            clearTimeout(timer)
        }
       
    }
}
Alert.defaultProps = {
    bol:true,
    name:"默认值",
    fontcolor:"#fff",
    bgcolor:"#ccc"
}

export default Alert