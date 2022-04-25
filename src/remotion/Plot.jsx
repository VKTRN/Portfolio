import React   from "react"
import {XAxis} from './XAxis'
import {YAxis} from './YAxis'
import {Graph} from './Graph'

export const Plot = ({data,config}) => {

	return (
    <>
      <XAxis config={config}/>
      <YAxis config={config}/>
      <Graph config={config} data={data} />
    </>
	)
}
