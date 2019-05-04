import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { log } from 'util';
import DoctorList from '../DoctorList'
import ActiveDoctor from '../ActiveDoctor'
import { getDoctors, resetActiveDoctor } from '../../actions/apiCalls'
import SearchBar from './SearchBar'
import Modal from '../../ui/ModalBase'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchText: '',
			loading: false,
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

	onSearch = (location) => {
		const { searchText, userLocation } = this.state
		const { dispatchGetDoctors } = this.props
		if (location === 'userInput') {
			return dispatchGetDoctors(searchText)
		}
		this.setState({ loading: true })
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;

				this.setState({
					userLocation: { latitude: latitude.toFixed(3), longitude: longitude.toFixed(3) },
					loading: false
				});
				return dispatchGetDoctors(`${userLocation.latitude},${userLocation.longitude},100`)
			},
			() => {
				this.setState({ loading: false });
			}
		);
	}

	closeModal = () => {
		const { dispatchResetActiveDoctor } = this.props
		dispatchResetActiveDoctor()
	}

	renderMobileViewActiveDoctor = () => {
		const { activeDoctor, isMobileView } = this.props
		const { showingAllInsurances } = this.state
		console.log(isMobileView, 'isMobileview')
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
		const { searchText } = this.state
		const { isMobileView } = this.props
		console.log(isMobileView, 'render==isMobileview')

		return (
			<Container>
				<SearchBar
					searchText={searchText}
					updateSearch={this.updateSearch}
					onSearch={this.onSearch}
				/>
				<Content>
					<DoctorList />
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
}
const mapStateToProps = state => ({
	isMobileView: state.appstate.isMobileView,
	activeDoctor: state.doctors.activeDoctor,
})
const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchGetDoctors: bindActionCreators(getDoctors, dispatch),
	dispatchResetActiveDoctor: bindActionCreators(resetActiveDoctor, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)

const Container = styled.div`
	margin: 0 auto;

`
const Content = styled.div`
	display: flex;
	padding-top: 70px;
`
const Close = styled.div`
`
