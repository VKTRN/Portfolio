import React         from 'react'
import {useState}    from 'react'
import {useSelector} from 'react-redux'
import {renderVideo} from '../../../functions.ts'

export const RenderButton = ({type}) => {

  const [isRendering, setIsRendering] = useState(false)

  const mode       = useSelector(state => state.mode)
  const categories = useSelector(state => state.categories)
  const numerical  = useSelector(state => state.numerical)
  const config     = useSelector(state => state.config)

  const body = type === 'categorical' ? {data: categories, mode: mode} : {data: numerical, mode: mode, config: config}

  return(
    <button className='render-button' type='button' disabled={isRendering}  onClick={() => renderVideo(body, setIsRendering)}>
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

