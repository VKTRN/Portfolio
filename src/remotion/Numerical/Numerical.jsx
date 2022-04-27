import React                 from 'react';
import {Viewer}              from '../Viewer/Viewer'
import {BasicSheet}          from './BasicSheet/BasicSheet';
import {RenderButton}        from '../shared/RenderButton/RenderButton'
import {Wrapper, LeftBar}    from './Numerical.styles'
import {Controls}            from './Controls/Controls'

export const Numerical = () => {

  return (
    <Wrapper>
      <LeftBar>
        <RenderButton type='numerical'/>
        <Controls/>
      </LeftBar>
      <Viewer/>
      <BasicSheet/>
    </Wrapper>
  )
}