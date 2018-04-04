import React from "react"
import BotCard from "../../../../../../../../../../Components/BotCard"

import "./Style/index.scss"

class FilteredBots extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // render() {
  //   return (
  //     <div className='list-bots'>
  //       <div className='filtered-bots'>
  //         <span>{`${this.props.filter} Bots`}</span>
  //         <br />
  //         <div className='filtered-bot-list-container'>
  //           {
  //             this.props.bots.map((obj, index) => {
  //               if (obj[this.props.filter.toLowerCase()]) {
  //                 return (<BotCard {...obj} key={`hired-bot-${index}`} isHired={obj.hired}/>)
  //               }
  //             })
  //           }
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  render() {
    var allBots = this.props.bots.map((obj, index) => (
      <BotCard
        {...obj}
        key={`all-bots-${index}`}
        push={this.props.push}
        isHired={obj.hired}
        hire={this.props.hireBot}
        unhire={this.props.unhireBot}
        fetchBots={this.props.fetchBots}
      />
    ))
    var filteredBots = null
    switch (this.props.filter) {
      case "Hired":
        filteredBots = allBots.filter((el, index) => el.props.hired && el.props.activated)
        break
      case "Available":
        console.log("ok")
        filteredBots = allBots.filter((el, index) => el.props.activated && !el.props.hired)
        break
      case "All":
        filteredBots = allBots.filter((el, index) => true)
        break
    }
    return (
      <div className="filtered-bot-list-container">
        <span>{`${this.props.filter} Bots`}</span>
        <div className="filtered-bot-list">{filteredBots.map((el, index) => el)}</div>
      </div>
    )
  }
}

export default FilteredBots
