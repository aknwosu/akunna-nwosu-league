import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from '../../ui/ModalBase'

// eslint-disable-next-line import/no-named-as-default
import DetailsView from './DetailsView'

class ActiveDoctor extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showingAllInsurances: false
		}
	}

	componentDidMount() {
		this.setState({
			showingAllInsurances: false
		})
	}

	componentDidUpdate(prevProps) {
		const { activeDoctor } = this.props
		if (prevProps.activeDoctor.profile !== activeDoctor.profile) {
			this.setState({ showingAllInsurances: activeDoctor.insurances > 6 })
		}
	}


	updateShowingAll = () => {
		this.setState(prevState => ({ showingAllInsurances: !prevState.showingAllInsurances }))
	}

	// renderMobileViewActiveDoctor = () => {
	// 	const { activeDoctor, isMobileView } = this.props
	// 	const { showingAllInsurances } = this.state
	// 	return (
	// 		<Modal>
	// 			{activeDoctor.uid && (
	// 				<DetailsView
	// 					activeDoctor={activeDoctor}
	// 					updateShowingAll={this.updateShowingAll}
	// 					showingAllInsurances={showingAllInsurances}
	// 				/>
	// 			)}
	// 		</Modal>
	// 	)
	// }

	render() {
		const { activeDoctor, isMobileView } = this.props
		const { showingAllInsurances } = this.state
		return (
			<Container isMobileView={isMobileView}>
				{activeDoctor.uid && (
					<DetailsView
						activeDoctor={activeDoctor}
						updateShowingAll={this.updateShowingAll}
						showingAllInsurances={showingAllInsurances}
						isMobileView={isMobileView}
					/>
				)}
			</Container>
		)
	}
}
ActiveDoctor.propTypes = {
	activeDoctor: PropTypes.object.isRequired,
	isMobileView: PropTypes.bool.isRequired,
}
const mapStateToProps = state => ({
	activeDoctor: state.doctors.activeDoctor,
	isMobileView: state.appstate.isMobileView
})
export default connect(mapStateToProps)(ActiveDoctor)

const Container = styled.div`
	background: #FFFFFF;
	width: 100%;
	margin-left: 400px;
	height: calc(100vh - 70px);
	overflow: scroll;
	${({ isMobileView }) => isMobileView && `
		margin-left: 0;
		height: 100vh;
		width: 100vw;
	`}
`
