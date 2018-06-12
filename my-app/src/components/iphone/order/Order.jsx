import React,{Component} from "react";
import "./Order.css"
import Nav from "../nav/Nav"
class Order extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className="main">
                <div className="order-content">
                这是订单页
                </div>
                <Nav></Nav>
        </div>
    }
}

export default Order