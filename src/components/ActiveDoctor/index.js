import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from '../../ui/ModalBase'
import SearchState from '../../assets/search_wctu.svg'

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

	renderEmptyDoctorView = () => (
		<Wrapper>
			<LargeIcon src={SearchState} />
			<NoDataText>Select a doctor to view details</NoDataText>
		</Wrapper>
	)

	render() {
		const { activeDoctor, isMobileView } = this.props
		const { showingAllInsurances } = this.state
		return (
			<Container isMobileView={isMobileView}>
				{activeDoctor.uid ? (
					<DetailsView
						activeDoctor={activeDoctor}
						updateShowingAll={this.updateShowingAll}
						showingAllInsurances={showingAllInsurances}
						isMobileView={isMobileView}
					/>
				)
					: this.renderEmptyDoctorView()
				}
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
const LargeIcon = styled.div`
	background: ${({ src }) => `url(${src})`};
	background-size: contain;
	display: -webkit-inline-box;
	margin-right: 10px;
	background-repeat: no-repeat;
	height: 400px;
	width: 400px;
	margin: 100px 50px 0;
`

const NoDataText = styled.div`
	font-size: 30px;
	color: #72aca9;
`
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;	
`
