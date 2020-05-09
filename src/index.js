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
	background-image: linear-gradient(to right, ${props => props.colorStart} 0%, ${props => props.colorStart} 50%,${props => props.colorEnd} 50%,${props => props.colorEnd} 100%);
	&:before {
		content: '';
		transform: rotate(${props => props.deg}deg);
		background-color: ${props => (props.percentage > 50 ? `${props.colorEnd}` : 'inherit')};
		transition: all 2s ease;
	}
`

const DonoutChart = props => {
	const {
		colorOff,
		colorOn,
		percentage,
		labelOn,
		labelOff,
		baseClass,
		circleColor,
		textStyle,
		labelStyle,
	} = props

	const deg = percentage > 50 ? ((percentage - 50) / 100) * 360 : (percentage / 100) * 360
	return (
		<div className={`donutContainer ${baseClass}`}>
			<Circle
				deg={deg}
				colorStart={colorOn}
				colorEnd={colorOff}
				className="circle"
				circleColor={circleColor}
				percentage={percentage}
			/>
			<div className={`details details--${baseClass}`}>
				<h2
					style={{
						...textStyle,
					}}
				>
					Content usage
				</h2>
				<h1
					style={{
						...textStyle,
					}}
				>
					{
						`${percentage}%`
					}
				</h1>
				<ul>
					<Indicator
						color={colorOff}
						className={`indicator off indicator-off--${baseClass}`}
						style={{
							...labelStyle.off,
						}}
					>
						{labelOff}
					</Indicator>
					<Indicator
						color={colorOn}
						className={`indicator on  indicator-on--${baseClass}`}
						style={{
							...labelStyle.on,
						}}
					>
						{labelOn}
					</Indicator>
				</ul>
			</div>
		</div>
	)
}

DonoutChart.defaultProps = {
	baseClass: '',
	circleColor: '#fff',
	labelStyle: {},
	percentage: 0,
	textStyle: {},
}

DonoutChart.propTypes = {
	baseClass: PropTypes.string,
	circleColor: PropTypes.string,
	colorOff: PropTypes.string.isRequired,
	colorOn: PropTypes.string.isRequired,
	labelOff: PropTypes.string.isRequired,
	labelOn: PropTypes.string.isRequired,
	labelStyle: PropTypes.objectOf(
		PropTypes.objectOf(
			PropTypes.string,
		),
	),
	percentage: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	textStyle: PropTypes.objectOf(
		PropTypes.string,
	),
}


export default DonoutChart
