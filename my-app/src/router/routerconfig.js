//引入主页的几大组件
import Home from "../components/iphone/homepage/Home";
import Order from "../components/iphone/order/Order";
import My from "../components/iphone/my/My";


//登录注册组件
import Register from "../components/iphone/login/Register";
import Agreement from "../components/iphone/login/Agreement";
import Resetpass from "../components/iphone/login/Resetpass";
import Login from "../components/iphone/login/Login";

//我的
import Certification from "../components/iphone/my/item/Certification";
import Recycling from "../components/iphone/my/item/Recycling";
import Invitation from "../components/iphone/my/item/Invitation";
import Bankcard from "../components/iphone/my/item/Bankcard";
import Help from "../components/iphone/my/item/Help";
import Feedback from "../components/iphone/my/item/Feedback";
import Settings from "../components/iphone/my/item/Settings";

//我的---关于邀请的组件
import Instructions from "../components/iphone/my/item/Invitation/Instructions";
import Reward from "../components/iphone/my/item/Invitation/Reward";

// 我的---关于客服
import Customerservice from "../components/iphone/my/item/Help/Customerservice";

//我的 ---关于设置
import Releasenotes from "../components/iphone/my/item/settings/Releasenotes";
import Changepass from "../components/iphone/my/item/settings/Changepass";
import Aboutus from "../components/iphone/my/item/settings/Aboutus";
let Navrouter = [
    {pathname:"/",component:Home},
    {pathname:"/Home",component:Home},
    {pathname:"/Order",component:Order},
    {pathname:"/My",component:My},
    {pathname:"/Register",component:Register},
    {pathname:"/Agreement",component:Agreement},
    {pathname:"/Resetpass",component:Resetpass},
    {pathname:"/Login",component:Login},
    {pathname:"/Certification",component:Certification},
    {pathname:"/Recycling",component:Recycling},
    {pathname:"/Invitation",component:Invitation},
    {pathname:"/Bankcard",component:Bankcard},
    {pathname:"/Help",component:Help},
    {pathname:"/Feedback",component:Feedback},
    {pathname:"/Settings",component:Settings},
    {pathname:"/Instructions",component:Instructions},
    {pathname:"/Reward",component:Reward},
    {pathname:"/Customerservice",component:Customerservice},
    {pathname:"/Releasenotes",component:Releasenotes},
    {pathname:"/Changepass",component:Changepass},
    {pathname:"/Aboutus",component:Aboutus}
]
export let LoginRouter = {
    "/Login":Login,
    "/Register":Register,
    "/Agreement":Agreement,
    "/Resetpass":Resetpass,
    "/Certification":Certification,
    "/Recycling":Recycling,
    "/Invitation":Invitation,
    "/Bankcard":Bankcard,
    "/Help":Help,
    "/Feedback":Feedback,
    "/Settings":Settings,
    "/Instructions":Instructions,
    "/Reward":Reward,
    "/Customerservice":Customerservice,
    "/Releasenotes":Releasenotes,
    "/Changepass":Changepass,
    "/Aboutus":Aboutus
}


export default Navrouter