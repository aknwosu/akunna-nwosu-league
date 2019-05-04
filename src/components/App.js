import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { onResizeScreen } from '../actions/appstate'

import Home from './Home'


class App extends Component {
	componentDidMount() {
		window.addEventListener('resize', this.onResize)
		this.onResize()
	}

		onResize = () => {
			const { dispatchOnResizeScreen } = this.props
			dispatchOnResizeScreen()
		}

		render() {
			return (
				<div>
					<Home />
				</div>
			);
		}
}
App.propTypes = {
	dispatchOnResizeScreen: PropTypes.func.isRequired,
}
const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchOnResizeScreen: bindActionCreators(onResizeScreen, dispatch)
})
export default connect(null, mapDispatchToProps)(App)
