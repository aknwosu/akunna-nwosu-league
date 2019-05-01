import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DoctorList from '../DoctorList'
import { getDoctors } from '../../actions/apiCalls'

class Home extends Component {
	componentDidMount() {
		const { dispatchGetDoctors } = this.props
		dispatchGetDoctors()
	}

	render() {
		return (
			<Container>
				<DoctorList />
			</Container>
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

const Container = styled.div`
	max-width: 940px;
	margin: 0 auto;
`
