const changeTheme = (isLight) =>{
    return {
        type: "CHANGE_THEME",
        payload: !isLight
    }
}
export default changeTheme;