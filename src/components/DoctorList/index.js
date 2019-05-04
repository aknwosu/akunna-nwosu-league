import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getDoctors, setActiveDoctor } from '../../actions/apiCalls'
import CardView from './CardView'

class DoctorsList extends Component {
	render() {
		const {
			doctorsList, dispatchSetActiveDoctor, activeDoctor, isMobileView
		} = this.props
		return (
			<Container isMobileView={isMobileView}>
				{doctorsList.map(doctorData => (
					<CardView
						isActive={activeDoctor.uid === doctorData.uid}
						key={doctorData.uid}
						doctorData={doctorData}
						dispatchSetActiveDoctor={dispatchSetActiveDoctor}
					/>
				))}
			</Container>
		)
	}
}
DoctorsList.propTypes = {
	doctorsList: PropTypes.array.isRequired,
	dispatchSetActiveDoctor: PropTypes.func.isRequired,

}
const mapStateToProps = state => ({
	doctorsList: state.doctors.doctorsList,
	activeDoctor: state.doctors.activeDoctor,
	isMobileView: state.appstate.isMobileView
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
	box-sizing: border-box;
	position: fixed;
	height: calc(100vh - 70px);
	overflow-y: scroll;
`
