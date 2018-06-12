import data from "./data/user.json";

const login={
    url:'/user',
    method:'get',
    reply:(config)=>{
        return new Promise((resolve,reject) => {
            resolve([200,data])
        })
    }
}
let loginarr = [login]

export default loginarr