import Data from "./data/data.json";
const data = {
    url:'/data',
    method:'get',
    reply:(config) => {
        return new Promise((resolve,reject) => {
            resolve([200,Data])
        })
    }
}
let arr = [data]

export default arr