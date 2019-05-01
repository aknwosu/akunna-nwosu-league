import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getDoctors, setActiveDoctor } from '../../actions/apiCalls'
import CardView from './CardView'

class DoctorsList extends Component {
	render() {
		console.log(this.props)
		const { doctorsList, dispatchSetActiveDoctor } = this.props
		return (
			<div>
				{doctorsList.map(doctorData => (
					<CardView
						doctorData={doctorData}
						dispatchSetActiveDoctor={dispatchSetActiveDoctor}
					/>
				))}
			</div>
		)
	}
}
DoctorsList.propTypes = {
	doctorsList: PropTypes.array.isRequired,
	dispatchSetActiveDoctor: PropTypes.func.isRequired,

}
const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchGetDoctors: bindActionCreators(getDoctors, dispatch),
	dispatchSetActiveDoctor: bindActionCreators(setActiveDoctor, dispatch)
})
const mapStateToProps = state => ({
	doctorsList: state.doctors.doctorsList,
	activeDoctor: state.doctors.activeDoctor
})
export default connect(mapStateToProps, mapDispatchToProps)(DoctorsList)
