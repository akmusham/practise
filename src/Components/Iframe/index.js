import React from 'react'
import './Style/index.scss'

const Iframe = ({ url }) => {
  return (
    <div className='iframe-widget'>
      <iframe src={url} allowFullScreen='true' frameBorder="0"></iframe>
    </div>
  )
}

export default Iframe
