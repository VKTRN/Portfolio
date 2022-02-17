import React from 'react';

type Props = {
  id: string,
  link: string
}

function SocialButton({id, link}:Props){

  return(
    <a id={id} href={link} className="social">
      <img src={`./svg/${id}.svg`} alt="" />
    </a>
  )
}

export default SocialButton;