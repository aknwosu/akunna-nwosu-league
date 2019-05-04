import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { onResizeScreen } from '../actions/appstate'


it('renders without crashing', () => {
	const div = document.createElement('div');
	const dispatchOnResizeScreen = jest.fn();
	shallow(<App dispatchOnResizeScreen={dispatchOnResizeScreen} />);
	// ReactDOM.unmountComponentAtNode(div);
});
describe('mapDispatchToProps', () => {
	it('should dispatch dispatchOnResizeScreen when screen is resized', () => {
		const dispatch = jest.fn();
		const props = mapDispatchToProps(dispatch);
		props.dispatchOnResizeScreen();
		expect(dispatch).toHaveBeenCalled();
	});
});
