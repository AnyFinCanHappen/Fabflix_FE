const loggedReducer = (state = false, action) =>{
    switch(action.type){
        case "CHANGE_LOGGED":
            return action.payload;
        default:
            return state;
    }
}
export default loggedReducer;