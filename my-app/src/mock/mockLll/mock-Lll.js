import List from './data/data.js'
import Detail from './data/detail.js'

const list = {
    url:'/api/data',
    method:'get',
    reply:(config) => {
        return new Promise((resolve,reject) => {
            resolve([200,List])
        })
      }
}
const detail = {
    url:'/api/data1',
    method:'get',
    reply:(config) => {
        return new Promise((resolve,reject) => {
            resolve([200,Detail])
        })
      }
}

let arr = [list,detail]




export default arr