import React from 'react'

function Logo({name}){
  return(
    <div className="logo">
      <div>
        <img src={`./svg/${name}.svg`} alt="" />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default Logo;