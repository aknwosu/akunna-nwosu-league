import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { getDoctors } from '../../actions/apiCalls'
import CardView from './CardView'
class DoctorList extends Component {
  render() {
    console.log(this.props)
    const { doctorsList } = this.props
    return (
      
      <div>
        {doctorsList.map(doctorData => 
          <CardView doctorData={doctorData} />
        )}
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchGetDoctors: bindActionCreators(getDoctors, dispatch),
  }
}
const mapStateToProps = state => {
  return {
    doctorsList: state.doctors.doctorsList
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DoctorList)
