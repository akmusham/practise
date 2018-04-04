import React from "react"
import SearchBar from "../../Components/SearchBar"
import SkillCard from "../../Components/SkillCard"
import ScrollBar from "../../Components/ScrollBar"
import "./Style/index.scss"

class SkillList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    console.log(this.props.skills);
    return (
      <div className="skill-list-container">
        <SearchBar />
        {/* <ScrollBar> */}
        <div className="filtered-skills">
        {this.props.skills.map((obj, index) => {
            return <SkillCard {...this.props} {...obj} key={`bot-skills-${index}`} />
        })}
      </div>
    {/* </ScrollBar> */}
    </div>
    )
  }
}

export default SkillList
