/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DoctorList from '../DoctorsList'
import ActiveDoctor from '../ActiveDoctor'
import { getDoctors, resetActiveDoctor } from '../../actions/doctors'
import SearchBar from '../SearchBar'
import Modal from '../../ui/ModalBase'

export class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchText: '',
			userLocation: { latitude: null, longitude: null }
		}
	}

	componentDidMount() {
		const { dispatchGetDoctors } = this.props
		dispatchGetDoctors()
	}

	updateSearch = (event) => {
		this.setState({ searchText: event.target.value })
	}

	// eslint-disable-next-line consistent-return
	onSearch = (location) => {
		const { searchText, userLocation } = this.state
		const { dispatchGetDoctors } = this.props
		if (location === 'userInput') {
			return dispatchGetDoctors(searchText)
		}
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				this.setState({
					userLocation: { latitude: latitude.toFixed(3), longitude: longitude.toFixed(3) },
					searchText: `${latitude.toFixed(3)},${longitude.toFixed(3)},100`
				})
				return dispatchGetDoctors(`${userLocation.latitude},${userLocation.longitude},100`)
			},
		);
	}

	closeModal = () => {
		const { dispatchResetActiveDoctor } = this.props
		dispatchResetActiveDoctor()
	}

	// eslint-disable-next-line consistent-return
	renderMobileViewActiveDoctor = () => {
		const { activeDoctor } = this.props
		if (activeDoctor.uid) {
			return (
				<Modal handleClose={this.closeModal}>
					<Close onClick={this.closeModal}>X</Close>
					<ActiveDoctor />
				</Modal>
			)
		}
	}

	render() {
		const { searchText, loading } = this.state
		const { isMobileView } = this.props
		return (
			<Container>
				<SearchBar
					searchText={searchText}
					updateSearch={this.updateSearch}
					onSearch={this.onSearch}
					isMobileView={isMobileView}
				/>
				<Content>
					<DoctorList loading={loading} />
					{!isMobileView && <ActiveDoctor />}
					{isMobileView && this.renderMobileViewActiveDoctor()}
				</Content>
			</Container>
		)
	}
}
Home.propTypes = {
	dispatchGetDoctors: PropTypes.func.isRequired,
	isMobileView: PropTypes.bool.isRequired,
	dispatchResetActiveDoctor: PropTypes.func.isRequired,
	activeDoctor: PropTypes.object
}
export const mapStateToProps = state => ({
	isMobileView: state.appstate.isMobileView,
	activeDoctor: state.doctors.activeDoctor,
})
export const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchGetDoctors: bindActionCreators(getDoctors, dispatch),
	dispatchResetActiveDoctor: bindActionCreators(resetActiveDoctor, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)

const Container = styled.div`
	margin: 0 auto;
	min-width: 370px;

`
const Content = styled.div`
	display: flex;
	padding-top: 70px;
`
const Close = styled.div`
	font-size: 30px;
	position: absolute;
	right: 20px;
	font-weight: bold;
`
