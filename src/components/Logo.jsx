import React from 'react'

function Logo({name}){
  return(
    <div className="logo">
      <img src={`./svg/${name}.svg`} alt="" />
      <p>{name}</p>
    </div>
  )
}

export default Logo;