import React              from 'react';
import {Viewer}           from '../Viewer/Viewer'
import {RenderButton}     from '../shared/RenderButton/RenderButton'
import {Wrapper, LeftBar} from './Categorical.styles'
import {Controls}         from './Controls/Controls'

export const Categorical = () => {

  return (
    <Wrapper>
      <LeftBar>
        <RenderButton type='categorical' />
        <Controls/>
      </LeftBar>
      <Viewer/>
    </Wrapper>
  )
}

