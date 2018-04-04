import * as types from "../../../Constants/LoginConstants"
import * as actions from "../"
import mockStore from "../../../../../.mocks/storeMock"
import mockAxios from "../../../../../.mocks/axiosMock"

describe("LoginActions", () => {
  it("should create an action to update email", () => {
    const email = "abcd@techforce.ai"
    const expectedAction = {
      type: types.UPDATE_EMAIL,
      email
    }
    expect(actions.updateEmail(email)).toEqual(expectedAction)
  })

  it("should create an action to update password", () => {
    const password = "123456"
    const expectedAction = {
      type: types.UPDATE_PASSWORD,
      password
    }
    expect(actions.updatePassword(password)).toEqual(expectedAction)
  })

  it("should create action for successfully signed in user", () => {
    const response = {}
    const expectedAction = {
      type: types.USER_SIGNIN_SUCCESS,
      response
    }
    expect(actions.userSignInSuccess(response)).toEqual(expectedAction)
  })

  it("should create action to show error dialog", () => {
    const openErrorDialog = ""
    const expectedAction = {
      type: types.SHOW_ERROR_DIALOG,
      openErrorDialog
    }
    expect(actions.showErrorDialog(openErrorDialog)).toEqual(expectedAction)
  })

  it("should create action to show lost password dialog", () => {
    const openLostPasswordDialog = ""
    const expectedAction = {
      type: types.SHOW_LOST_PASSWORD_DIALOG,
      openLostPasswordDialog
    }
    expect(actions.showLostPasswordDialog(openLostPasswordDialog)).toEqual(expectedAction)
  })

  // ASYNC ACTIONS TESTING

  describe("Async LoginActions", () => {
    afterEach(() => {
      mockAxios.reset()
      mockAxios.restore()
    })

    it("should create USER_SIGNIN_SUCCESS when successfully signed in", () => {
      mockAxios
        .onPost("http://techforce.47billion.com/speedops/api/v1/auth/signin")
        .replyOnce(200, {
          access_token: "abcd",
          refresh_token: "1234"
        })
      const expectedAction = [
        {
          type: types.USER_SIGNIN_SUCCESS,
          response: {
            access_token: "abcd",
            refresh_token: "1234"
          }
        }
      ]
      const store = mockStore({ access_token: "", refresh_token: "" })
      return store.dispatch(actions.userSignIn()).then(() => {
        expect(store.getActions()).toEqual(expectedAction)
      })
    })
  })
})
