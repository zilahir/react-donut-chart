import React from 'react'

import DonoutChart from '../src/index'
import './CustomStyle.scss'

/**
* @author zilahir
* @function Example
* */

const Example = () => (
	<div>
		<DonoutChart
			percentage={30}
			colorOn="#510E80"
			colorOff="#8217CC"
			labelOff="Used content"
			labelOn="Unused content"
			circleColor="#08010d"
			baseClass="customClass"
		/>
	</div>
)

export default Example
