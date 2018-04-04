import * as actions from "../"
import * as types from "../../../Constants/RegistrationConstants"
import mockStore from "../../../../../.mocks/storeMock"
import mockAxios from "../../../../../.mocks/axiosMock"

describe("RegisterActions", () => {
  it("should create action to update form values", () => {
    const id = "name"
    const value = "techforce"
    const expectedAction = {
      type: types.UPDATE_FORM_VALUE,
      id,
      value
    }
    expect(actions.updateFormValues(id, value)).toEqual(expectedAction)
  })

  // ASYNC ACTIONS TESTING
  describe("Async RegisterActions", () => {
    afterEach(() => {
      mockAxios.reset()
      mockAxios.restore()
    })

    it("should register user", () => {})
  })
})
