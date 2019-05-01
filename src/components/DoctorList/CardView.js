import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardView = ({ doctorData, dispatchSetActiveDoctor }) => {
	const {
		specialties, practices, profile: {
			image_url, last_name, first_name, bio
		}
	} = doctorData
	const sortedPractices = practices.sort((a, b) => a.distance - b.distance)

	// specialties.map(specialty => specialtiesArr.push(specialty.actor))
	return (
		<Container onClick={() => dispatchSetActiveDoctor(doctorData)}>
			<Avatar src={image_url} alt="" />
			<div>
				<div>{first_name} {last_name}</div>
				<div>{`${sortedPractices[0].distance.toFixed(2)} miles away`}</div>
				{specialties.map(specialty => (
					<div>{specialty.actor}</div>
				))}
			</div>
		</Container>
	)
}
CardView.propTypes = {
	doctorData: PropTypes.object.isRequired,
	dispatchSetActiveDoctor: PropTypes.func.isRequired,
}
export default CardView
const Container = styled.div`
	width: 440px;
	background-color: ${({ theme }) => theme.color.white};
	margin: 10px auto;
  display: flex;
`
const Avatar = styled.img`
border-radius: 100%
`
