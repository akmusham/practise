import React from "react"
import { expect } from "chai"
import { mount } from "enzyme"
import sinon from "sinon"
import { Provider } from "react-redux"
import store from "../../../../../Redux/Store"
import TextFieldClass from "../"
import TextField from "../../../../../Components/TextField"
import renderer from "react-test-renderer"

describe("render connected TextFieldClass component", () => {
  let wrapper
  const props = {
    placeholder: "Email",
    type: "email",
    name: "email"
  }
  const onChange = sinon.spy()

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <TextFieldClass
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          onChange={onChange}
        />
      </Provider>
    )
  })

  it("should render component", () => {
    expect(wrapper.length).to.equal(1)
  })

  it("should check if props are passed properly", () => {
    expect(wrapper.find(TextField).prop("name")).to.equal(props.name)
    expect(wrapper.find(TextField).prop("placeholder")).to.equal(props.placeholder)
    expect(wrapper.find(TextField).prop("type")).to.equal(props.type)
  })

  it("should match snapshot", () => {
    const renderedValue = renderer.create(
      <Provider store={store}>
        <TextFieldClass
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          onChange={onChange}
        />
      </Provider>
    )
    expect(renderedValue.toJSON()).to.matchSnapshot()
  })

  // it('simulates change events', () => {
  //   const e = {
  //     target: {
  //       type: "email"
  //     }
  //   }
  //   wrapper.find('input').simulate('change', e)
  //   expect(onChange).to.have.property('callCount', 1)
  // })
})
