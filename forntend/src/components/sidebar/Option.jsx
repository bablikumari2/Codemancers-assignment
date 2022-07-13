import React from 'react'
import {Avatar} from "@material-ui/core"
function Option({src,Icon,title}) {
  return (
    <div className='sidebarrow'>
      {src && <Avatar src={src}/>}
      {Icon && <Icon/>}
        <p>{title}</p>
        
    </div>
  )
}

export default Option