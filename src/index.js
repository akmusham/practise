import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import store, { history } from "./Redux/Store"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
const target = document.querySelector("#root")
import LoginPage from "./Pages/LoginPage"
import UserHomePage from "./Pages/UserHomePage"
import RegisterPage from "./Pages/RegisterPage"
import refreshTokenApi from "./Redux/Actions/LoginActions/refreshTokenApi"
import App from "./App/index"
import $ from "jquery"
global.$ = $

$(document).ready(function () {
  render(<App />, target)
});
