import axios from "axios"
export let createuser = (data)=>{
    return {
        type:"GETUSER",
        user:data
    }
}
export let Asyncuser = ()=>{
    return (dispatch)=>{
        axios({
            url:"/user",
            method:"GET"
        })
        .then((res)=>{
            dispatch(createuser(res.data))
        })
    } 
}