import React from "react"
import QueryComponent from "../MessageComponents/QueryComponent"
import AnswerComponent from "../MessageComponents/AnswerComponent"
import TextInputComponent from "../MessageComponents/TextInputComponent"
import SingleSelectComponent from "../MessageComponents/SingleSelectComponent"
import MultiSelectComponent from "../MessageComponents/MultiSelectComponent"
import DropDownComponent from "../MessageComponents/DropDownComponent"
function renderChat(chatProps) {
  let that = this
  return chatProps.chatHistory.map(function(item, index) {
    const renderJson = {
      text: item.text,
      step: {
        title: ""
      },
      updateAnswer: that.updateAnswer,
      parentstate: that.state,
      step: item.step,
      PostData: that.PostData,
      updatedDate: item.updatedDate
    }

    switch (item.type) {
      case "QUERY":
        return <div key={item.id}>{React.createElement(QueryComponent, renderJson)}</div>

      case "ANSWER":
        return (
          <div className="chat-answer" key={item.id}>
            {React.createElement(AnswerComponent, renderJson)}
          </div>
        )

      case "text":
        return <div key={item.id}>{React.createElement(TextInputComponent, renderJson)}</div>

      case "singleselect":
        return <div key={item.id}>{React.createElement(SingleSelectComponent, renderJson)}</div>

      case "multiselect":
        return <div key={item.id}>{React.createElement(MultiSelectComponent, renderJson)}</div>

      case "dropdown":
        return <div key={item.id}>{React.createElement(DropDownComponent, renderJson)}</div>
    }
  })
}

module.exports.renderChat = renderChat
