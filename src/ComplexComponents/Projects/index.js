import React from 'react'
import ProjectCard from './Components/ProjectCard'
import "./Styles/index.scss"

import data1 from './data.json'
class Projects extends React.Component{
    constructor(props){
      super(props)
    }
    render(){

      if(this.props.data){
      return(
        <div className='projectcontainer'>
        {  this.props.data.map((item,index) =>{
           return  <ProjectCard data={item} key={index}/>
         })}
        </div>
      )
    }
  }
  }

export default Projects
