import React from 'react'
import Logo from './Logo'

export const LogoGrid = ({logos}) => {
  
  return (
    <div className="logo-grid">
      <div className="wrapper dark-surface">
        <div className="grid">
          {
            logos.map(logo => (
              <Logo key={logo} name={logo}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}