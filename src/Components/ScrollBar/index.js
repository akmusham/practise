import React from "react"
import { Scrollbars } from "react-custom-scrollbars"

export const ScrollBar = props => (
  <Scrollbars
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
    onScrollFrame={props.onScrollFrame}
    style={{ height: "inherit", width: "100%", ...props.style }}
    className={props.className}
  >
    {props.children}
  </Scrollbars>
)

export default ScrollBar
