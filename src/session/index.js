let userChangedCb = null

const logOut = () => {

}

const registerUserChangedCb = cb => {
  if(!userChangedCb) {
    userChangedCb = cb
  }
}

export { logOut, registerUserChangedCb };
