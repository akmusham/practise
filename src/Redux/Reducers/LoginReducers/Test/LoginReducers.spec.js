import * as types from "../../../Constants/LoginConstants"
import reducer from "../"

const initialState = {
  email: "",
  password: "",
  openErrorDialog: false,
  openLostPasswordDialog: false
}

describe("user login reducer", () => {
  it("should return the initial  state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it("should handle UPDATE_EMAIL", () => {
    const action = {
      type: types.UPDATE_EMAIL,
      email: "techforce@gmail.com"
    }
    expect(reducer(initialState, action)).toEqual({
      email: "techforce@gmail.com",
      password: "",
      openErrorDialog: false,
      openLostPasswordDialog: false
    })
  })

  it("should handle UPDATE_PASSWORD", () => {
    const action = {
      type: types.UPDATE_PASSWORD,
      password: "abc123"
    }
    expect(reducer(initialState, action)).toEqual({
      email: "",
      password: "abc123",
      openErrorDialog: false,
      openLostPasswordDialog: false
    })
  })
})
