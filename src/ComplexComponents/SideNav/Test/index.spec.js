import React from "react"
import { ConnectedRouter } from "react-router-redux"
import { expect } from "chai"
import { mount } from "enzyme"
import sinon from "sinon"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import store from "../../../../../Redux/Store"
import SideNav from "../"
import Nav from "../../../../../Components/Nav"
import navProps from "../NavigationData"
import { history } from "../../../../../Redux/Store"

describe("render connected SideNav component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <SideNav />
        </ConnectedRouter>
      </Provider>
    )
  })

  it("should render component", () => {
    expect(wrapper.length).to.equal(1)
  })

  it("should check if props are passed properly", () => {
    expect(wrapper.find(Nav)).to.have.length(navProps.length)
  })

  it("should match snapshot", () => {
    const renderedValue = renderer.create(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <SideNav />
        </ConnectedRouter>
      </Provider>
    )
    expect(renderedValue.toJSON()).to.matchSnapshot()
  })
})
