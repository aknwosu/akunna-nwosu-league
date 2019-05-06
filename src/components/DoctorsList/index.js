/* eslint-disable import/no-named-as-default */
import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getDoctors, setActiveDoctor } from '../../actions/doctors'
import CardView from './CardView'
import Pagination from '../Pagination'

export class DoctorsList extends Component {
	goToPage = (pageNumber) => {
		const { currentLocation, dispatchGetDoctors } = this.props
		dispatchGetDoctors(currentLocation, ((pageNumber - 1) * 10))
	}

	render() {
		const {
			doctorsList, dispatchSetActiveDoctor, activeDoctor, isMobileView, doctorsListLoading, getDoctorsError, total, currentPage
		} = this.props
		return (
			<Container isMobileView={isMobileView}>
				{!!doctorsList.length && (
					<Fragment>
						{doctorsList.map(doctorData => (
							<CardView
								isActive={activeDoctor.uid === doctorData.uid}
								key={doctorData.uid}
								doctorData={doctorData}
								dispatchSetActiveDoctor={dispatchSetActiveDoctor}
							/>
						))}
						<Pagination
							totalCount={total}
							onPageChanged={this.goToPage}
							currentPage={currentPage}
						/>
					</Fragment>
				)}
				{doctorsListLoading && <NoDataText>loading...</NoDataText>}
				{getDoctorsError && <NoDataText>{getDoctorsError}</NoDataText>}
				{!doctorsList.length && !doctorsListLoading && !getDoctorsError && <NoDataText>No doctors in the selected location</NoDataText>}
			</Container>
		)
	}
}
DoctorsList.propTypes = {
	doctorsList: PropTypes.array.isRequired,
	dispatchSetActiveDoctor: PropTypes.func.isRequired,
	activeDoctor: PropTypes.object,
	isMobileView: PropTypes.bool.isRequired,
	doctorsListLoading: PropTypes.bool,
	getDoctorsError: PropTypes.string,
	currentLocation: PropTypes.string,
	dispatchGetDoctors: PropTypes.func.isRequired,
	total: PropTypes.number,
	currentPage: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
	doctorsList: state.doctors.doctorsList,
	activeDoctor: state.doctors.activeDoctor,
	isMobileView: state.appstate.isMobileView,
	doctorsListLoading: state.doctors.doctorsListLoading,
	getDoctorsError: state.doctors.getDoctorsError,
	total: state.doctors.total,
	currentPage: state.doctors.currentPage,
	currentLocation: state.doctors.currentLocation,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchGetDoctors: bindActionCreators(getDoctors, dispatch),
	dispatchSetActiveDoctor: bindActionCreators(setActiveDoctor, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsList)

const Container = styled.div`
	background: #DAECEC;
	padding: 34px 18px 15px;
	width: ${({ isMobileView }) => (isMobileView ? '100vw' : '400px')};
	min-width: 375px;
	box-sizing: border-box;
	position: fixed;
	height: calc(100vh - 70px);
	overflow-y: scroll;
`
export const NoDataText = styled.div`
	font-size: 30px;
	color: #72aca9;
	`
