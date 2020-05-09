import React from 'react'

import DonoutChart from '../src/index'

/**
* @author zilahir
* @function Example
* */

const Example = () => (
	<div
		style={{
			display: 'flex',
			width: '900px',
			justifyContent: 'space-between',
		}}
	>
		<DonoutChart
			percentage={30}
			colorOn="#510E80"
			colorOff="#8217CC"
			labelOff="Me"
			labelOn="You"
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

		<DonoutChart
			percentage={60}
			colorOn="#F5C342"
			colorOff="#FFFF55"
			labelOff="lol"
			labelOn="Her"
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
