import * as constants from "../../Constants/LogoutConstants"
const initialState = {
  userLoggedOut: false
}

export default function handleLogoutOperations(state = initialState, action) {
  switch (action.type) {
    case constants.USER_LOGOUT:
      return Object.assign({}, state, {
        userLoggedOut: action.userLoggedOut
      })

    default:
      return state
  }
}
