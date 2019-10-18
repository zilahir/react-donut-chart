import React from 'react'

import DonoutChart from '../src/index'

/**
* @author zilahir
* @function Example
* */

const Example = () => (
	<div>
		<div>
			<DonoutChart
				percentage={30}
				colorOn="#510E80"
				colorOff="#8217CC"
				labelOff="Used content"
				labelOn="Unused content"
			/>
		</div>
	</div>
)

export default Example
