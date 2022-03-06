import React from 'react';



function SocialButton({id, link}){

  return(
    <a id={id} href={link} className="social">
      <img src={`./svg/${id}.svg`} alt="" />
    </a>
  )
}

export default SocialButton;