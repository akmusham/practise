import React from "react"
import { TransitionGroup } from "react-transition-group"
import cardWrapper from "../../Components/CardWrapper"
import ScrollBar from "../../Components/ScrollBar"
import SkillCard from "../../Components/SkillCard"

import "./Style/index.scss"

class FilteredSkills extends React.Component {
  onScrollFrame = e => {
    console.log("fetch", e)
  }

  render() {
    let availableSkills = []
    availableSkills = this.props.botSkills.filter(
      (obj, index) => !obj.subscribed && obj.type === "premium"
    )
    return (
      <div className="skill-paginate">
        <ScrollBar onScrollFrame={e => this.onScrollFrame(e)}>
          <TransitionGroup className="bot-skills-cards">
            {availableSkills.map(
              (obj, index) =>
                cardWrapper(SkillCard, {
                  ...obj,
                  key: `bot-skills-${index}`,
                  inEditing: true,
                  style: { transitionDelay: `0.${index}s, 0.${index}s, 0s` }
                })
              // <SkillCard key={`bot-skills-${index}`} {...obj} inEditing={true} />
            )}
          </TransitionGroup>
        </ScrollBar>
      </div>
    )
  }
}

export default FilteredSkills
