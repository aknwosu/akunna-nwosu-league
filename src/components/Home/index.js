import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { getDoctors } from '../../actions/apiCalls'

class Home extends Component {
	componentDidMount() {
		const { dispatchGetDoctors } = this.props
		dispatchGetDoctors()
	}

	render() {
		return (
			<div>
				Home
			</div>
		)
	}
}
Home.propTypes = {
	dispatchGetDoctors: PropTypes.func.isRequired,
}
const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchGetDoctors: bindActionCreators(getDoctors, dispatch),
})
export default connect(null, mapDispatchToProps)(Home)
