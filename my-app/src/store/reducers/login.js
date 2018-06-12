 let Login = (state=[],action)=>{
        switch(action.type){
            case "GETUSER":
            let newstate = [...state];
                newstate = action.user;
                return newstate
            break;
            default :
            return state;
            break;
        }
}

export {Login}