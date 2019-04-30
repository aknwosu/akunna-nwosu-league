import React from 'react'

const CardView = ({ doctorData }) => {
	console.log(doctorData)
	const {
		specialties, profile: {
			image_url, last_name, first_name, bio
		}
	} = doctorData
	return (
		<div>
			<img src={image_url} alt="" />
			<div>
				<div>{first_name}</div>
				<div>{last_name}</div>
			</div>
		</div>
	)
}
CardView.propTypes = {
	doctorData: PropTypes.object.isRequired,
}
export default CardView
