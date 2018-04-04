import * as types from "../../../Constants/RegistrationConstants"
import reducer from "../"

const initialState = {
  fullName: "",
  regEmail: "",
  companyName: "",
  regPassword: ""
}

describe("user register reducer", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it("should handle UPDATE_FORM_VALUE action", () => {
    const action1 = {
      type: types.UPDATE_FORM_VALUE,
      id: "fullName",
      value: "techforce"
    }
    const expectedResult = {
      fullName: "techforce",
      regEmail: "",
      companyName: "",
      regPassword: ""
    }
    expect(reducer(initialState, action1)).toEqual(expectedResult)
    const action2 = {
      type: types.UPDATE_FORM_VALUE,
      id: "regPassword",
      value: "abc123"
    }
    expect(reducer(expectedResult, action2)).toEqual({
      fullName: "techforce",
      regEmail: "",
      companyName: "",
      regPassword: "abc123"
    })
  })
})
