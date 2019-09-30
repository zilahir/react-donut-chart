import React, { Component } from 'react'
import DonoutChart from '../src/index'

/**
* @author zilahir
* @function Example
**/

const Example = (props) => {
  return(
    <div>
        <div>
            <DonoutChart
              percentage={30}
              colorOn="#ff0000"
              colorOff="#444444"
              labelOff="Used content"
              labelOn="Unused content"
            />
        </div>
    </div>
   )
}

export default Example