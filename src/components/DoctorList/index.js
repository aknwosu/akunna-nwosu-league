import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { getDoctors } from '../../actions/apiCalls'
class DoctorList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={() => this.props.dispatchGetDoctors()}>GET</button>
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
export default connect (mapStateToProps, mapDispatchToProps)(DoctorList)
