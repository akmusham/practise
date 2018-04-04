import React from "react"
import { expect } from "chai"
import { mount } from "enzyme"
import sinon from "sinon"
import { Provider } from "react-redux"
import GoogleIcon from "react-icons/lib/fa/google"
import GithubIcon from "react-icons/lib/fa/github"
import LinkedIn from "react-icons/lib/fa/linkedin"
import renderer from "react-test-renderer"
import store from "../../../../../Redux/Store"
import SocialIcons from "../"
import Button from "../../../../../Components/Button"

describe("render connected SocialIcons component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <SocialIcons />
      </Provider>
    )
  })

  it("should render component", () => {
    expect(wrapper.length).to.equal(1)
  })

  it("should check if props are passed properly", () => {
    expect(wrapper.find(GoogleIcon).prop("className")).to.equal("singInIcon")
    expect(wrapper.find(GithubIcon).prop("className")).to.equal("singInIcon")
    expect(wrapper.find(LinkedIn).prop("className")).to.equal("singInIcon")
  })

  it("should match snapshot", () => {
    const renderedValue = renderer.create(<SocialIcons />)
    expect(renderedValue.toJSON()).to.matchSnapshot()
  })
})
