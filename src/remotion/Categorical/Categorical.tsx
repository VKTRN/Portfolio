import React              from 'react'
import {FC}               from 'react'
import {Viewer}           from '../Viewer/Viewer'
import {RenderButton}     from '../shared/RenderButton/RenderButton'
import {Wrapper, LeftBar} from './Categorical.styles'
import {Controls}         from './Controls/Controls'

export const Categorical: FC<void> = () => {

  return (
    <Wrapper>
      <LeftBar>
        <RenderButton/>
        <Controls/>
      </LeftBar>
      <Viewer/>
    </Wrapper>
  )
}

