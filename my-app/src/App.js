import React, { Component } from 'react';
import './css/app.css';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import {unmountComponentAtNode} from "react-dom"
import 'antd-mobile/dist/antd-mobile.css';
//引入导航
import Nav from "./components/iphone/nav/Nav";
import Home from "./components/iphone/homepage/Home";
//引入路由配置
import router , {LoginRouter} from "./router/routerconfig";

//引入redux
import {Provider} from "react-redux"
import store from "./store/store";
class App extends Component {
  render() {
   
    return (
      <Provider store={store}>
        <Router>
          <div className="wrap"> 
            <Switch>
                    {
                      router.map((item,index)=>{
                        return <Route path={item.pathname} exact component={item.component} key={index}></Route>
                      })
                    }
                    
            </Switch>
          </div>
        </Router>
        </Provider>
    );
  }
}

export default App;
