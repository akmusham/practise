import React from "react"
import { expect } from "chai"
import { mount } from "enzyme"
import sinon from "sinon"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import store from "../../../../../Redux/Store"
import { SubmitButton } from "../"
import Button from "../../../../../Components/Button"

describe("render connected SubmitButton component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <SubmitButton label="Login" />
      </Provider>
    )
  })

  it("should render component", () => {
    expect(wrapper.length).to.equal(1)
  })

  it("should check if props are passed properly", () => {
    expect(wrapper.find(Button).prop("label")).to.equal("Login")
  })

  it("simulates click events", () => {
    const onClick = sinon.spy()
    wrapper = mount(<Button onClick={onClick} />)
    wrapper.find("button").simulate("click")
    expect(onClick).to.have.property("callCount", 1)
  })

  it("should match snapshot", () => {
    const renderedValue = renderer.create(<SubmitButton label="Login" />)
    expect(renderedValue.toJSON()).to.matchSnapshot()
  })
})
