import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
* @author zilahir
* @function DonoutChart
* */

const Indicator = styled.li`
	display: block;
	color: ${props => props.color};
	&:before {
			content: '';
			background-color: ${props => props.color};
	}
`

const Circle = styled.div`
	background-color: ${props => props.colorStart};
	background-image: linear-gradient(to right, ${props => props.colorStart} 0%, ${props => props.colorStart} 50%, ${props => props.colorEnd} 50%,${props => props.colorEnd} 100%);
	&:before {
		content: '';
		transform: rotate(${props => props.deg}deg);
		background-color: inherit;
	}
	&:after {
		background: #ffffff;
		content: '';
	}
`

const HeaderH1 =  styled.h1`
	color: ${props => props.color};
`

const HeaderH2 = styled.h2`
	color: ${props => props.color};
`

const DonoutChart = props => {
	const { colorOff, colorOn, percentage, labelOn, labelOff } = props

	const deg = (percentage / 100) * 360

	return (
		<div className="donutContainer">
			<Circle deg={deg} colorStart={colorOn} colorEnd={colorOff} className="circle" />
			<div className="details">
				<h2>
					Content usage
				</h2>
				<h1>
					25%
				</h1>
				<ul>
					<Indicator color={colorOn} className="indicator on">
						{labelOn}
					</Indicator>
					<Indicator color={colorOff} className="indicator on">
						{labelOff}
					</Indicator>
				</ul>
			</div>
		</div>
	)
}

DonoutChart.propTypes = {
	colorOff: PropTypes.string.isRequired,
	colorOn: PropTypes.string.isRequired,
	labelOff: PropTypes.string.isRequired,
	labelOn: PropTypes.string.isRequired,
	percentage: PropTypes.string.isRequired,
}


export default DonoutChart
