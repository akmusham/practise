import React from "react"
import { CSSTransition } from "react-transition-group"

import "./Style/index.scss"

// function cardWrapper(WrappedComponent) {
//   return class extends React.Component {
//     render() {
//       return (
//         <CSSTransition
//           {...this.props}
//           timeout={1000}
//           classNames='card'
//           appear={true}
//         >
//           <WrappedComponent />
//         </CSSTransition>
//       )
//     }
//   }
// }

const cardWrapper = (WrappedComponent, props) => (
  <CSSTransition {...props} timeout={1000} classNames="card" appear={true} enter={true} exit={true}>
    <WrappedComponent {...props} />
  </CSSTransition>
)

export default cardWrapper
