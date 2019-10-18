import React from 'react'

import DonoutChart from '../src/index'

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
			textStyle={{
				color: '#fff',
			}}
			labelStyle={{
				off: {
					fontSize: '16px',
				},
				on: {
					fontSize: '18px',
				},
			}}
		/>
	</div>
)

export default Example
