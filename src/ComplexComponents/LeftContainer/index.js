import React from "react"

export default class LeftContainer extends React.Component {
  render() {
    return (
        <div className="left-container">
          LEFT container
           <form>
             <label>
               Email Address:
               <input type="text" name="username" placeholder="email address"/>
             </label>
             <label>
               Password:
               <input type="passowrd" name="passowrd" placeholder="passowrd"/>
             </label>
             <label>
               Company:
               <input type="text" name="Company" placeholder="Company"/>
             </label>
             <label>
               Full Name:
               <input type="text" name="name" placeholder="full name"/>
             </label>
             <input type="submit" value="Submit" />
           </form>
        </div>
      )
  }
}
