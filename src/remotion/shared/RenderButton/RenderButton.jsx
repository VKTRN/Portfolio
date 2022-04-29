import React         from 'react'
import {useState}    from 'react'
import {useSelector} from 'react-redux'
import {renderVideo} from '../../../functions.ts'

export const RenderButton = () => {

  const [isRendering, setIsRendering] = useState(false)

  const state = useSelector(state => state)

  return(
    <button className='render-button' type='button' disabled={isRendering}  onClick={() => renderVideo(state, setIsRendering)}>
      {isRendering?
        <>
          <div className="spinner-container">
            <div className="loading-spinner">
            </div>
          </div>
          rendering...
        </>
        :
        <>render</>
      }
    </button>
  )
}

