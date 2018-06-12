import Releasenotes from './Releasenotes.json'

const releasenotes={
    url:'/releasenotes',
    method:'get',
    reply:(data)=>{
        return new Promise((resolve,reject) => {
            resolve([200,Releasenotes])
        })
    }
}

let arr = [releasenotes]
export default arr