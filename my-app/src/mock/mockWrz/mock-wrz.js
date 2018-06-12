

import Menu from "./homepage.json";
const menu = {
        url:'/menu',
        method:'get',
        reply:(config) => {
            return new Promise((resolve,reject) => {
                resolve([200,Menu])
            })
          }
    }

    let arr = [menu]




    export default arr