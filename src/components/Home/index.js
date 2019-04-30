import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getDoctors } from '../../actions/apiCalls'

class Home extends Component {
  componentDidMount() {
    const { dispatchGetDoctors } = this.props
    dispatchGetDoctors()
  }
  render() {
    return(
      <div>
        Home
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchGetDoctors: bindActionCreators(getDoctors, dispatch),
  }
}
export default connect(null, mapDispatchToProps)(Home)