import React from 'react';

export const RenderButton = ({isRendering, renderVideo}) => {
  return(
    <button className='render-button' type='button' disabled = {isRendering}  onClick={renderVideo}>
      {isRendering?<>
        <div className="spinner-container">
          <div className="loading-spinner">
          </div>
        </div>
      rendering...</>:"render"}
    </button>
  )
}