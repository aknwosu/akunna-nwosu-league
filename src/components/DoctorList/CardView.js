import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import OfficePhone from '../../assets/office-telephone.svg'

const CardView = (props) => {
	const {
		isActive, dispatchSetActiveDoctor, isMobileView, doctorData, doctorData: {
			specialties, practices, profile: {
				image_url, last_name, first_name, bio, slug
			}
		}
	} = props
	let sortedPractices;
	if (practices[0].distance) {
		sortedPractices = practices.length > 1 ? practices.sort((a, b) => a.distance - b.distance) : practices
	}
	const phones = []
	practices.map(practice => (
		practice.phones.map(phone => (
			phones.push(phone)
		))
	))

	let landlines = phones.filter(phone => phone.type === 'landline')
	landlines = landlines.slice(0, 3)
	return (
		<Container
			onClick={() => dispatchSetActiveDoctor(doctorData)}
			isActive={isActive}
		>
			<Avatar src={image_url} alt={slug} />
			<Info>
				<Title>{first_name} {last_name}</Title>
				{sortedPractices && (
					<SubText>{`${sortedPractices[0].distance.toFixed(2)} miles away`}</SubText>
				)}
				<ListItem>
					{specialties.map(specialty => (
						<Item key={specialty.uid}>{specialty.actor}</Item>
					))}
				</ListItem>
				<ListItem>
					<InfoIcon src={OfficePhone} />
					{landlines.map(phone => (
						<Item>{phone.number} </Item>
					))
					}
				</ListItem>
			</Info>
		</Container>
	)
}
CardView.propTypes = {
	doctorData: PropTypes.object.isRequired,
	dispatchSetActiveDoctor: PropTypes.func.isRequired,
	isActive: PropTypes.bool.isRequired,
	isMobileView: PropTypes.bool.isRequired,
}
export default CardView
const Container = styled.div`
	background-color: ${({ theme }) => theme.color.white};
	margin: 10px auto;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
	padding: 15px;
	border-left: 7px solid transparent;
	border-left-color: ${({ isActive }) => isActive && '#59A49F'};
  :hover {
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
		cursor: pointer;
		border-left-color: #59A49F;
	}
`
const Avatar = styled.img`
	border-radius: 100%;
	height: 60px;
`
const ListItem = styled.div`
	font-size: 14px;
	margin-bottom: 7px;
`
const Item = styled.span`
`
const Title = styled.div`
	font-variant: petite-caps;
  font-weight: bold;
`
const Info = styled.div`
	margin-left: 15px;
`
const SubText = styled.div`
	color: #909090;
	font-size: 14px;
`
const InfoIcon = styled.span`
	background: ${({ src }) => `url(${src})`};
	width: 13px;
  height: 15px;
	background-size: contain;
	display: -webkit-inline-box;
	margin-right: 10px;
	background-repeat: no-repeat;
	background-position: bottom;
`
