const changeLogged = (isLogged) =>{
    return {
        type: "CHANGE_LOGGED",
        payload: isLogged
    }
}
export default changeLogged;