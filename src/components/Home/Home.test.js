import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapStateToProps, mapDispatchToProps } from './index'
import { ActiveDoctor } from '../ActiveDoctor'
// eslint-disable-next-line import/no-named-as-default
import Modal from '../../ui/ModalBase'

describe('Home View', () => {
	let wrapper; let componentInstance;

	const baseProps = {
		isMobileView: false,
		dispatchGetDoctors: jest.fn(),
		dispatchResetActiveDoctor: jest.fn(),
		activeDoctor: {},
	};
	beforeAll(() => {
		wrapper = shallow(
			<Home {...baseProps} />
		)
		componentInstance = wrapper.instance();
		wrapper.instance().forceUpdate();
	})

	it('renders without crashing', () => {
		expect(wrapper.exists()).toBe(true);
		shallow(<Home {...baseProps} />);
	});
	it('should dispatch actions', () => {
		const dispatch = jest.fn();
		const props = mapDispatchToProps(dispatch);
		expect(baseProps.dispatchGetDoctors).toHaveBeenCalled();
		expect(baseProps.dispatchResetActiveDoctor).toBeDefined();
	});
	it('calls the different get doctors action on component mount', () => {
		expect(baseProps.dispatchGetDoctors).toHaveBeenCalled();
	});
	describe('location search', () => {
		it('searches the location with the input', () => {
			componentInstance.onSearch('userInput');
			expect(baseProps.dispatchGetDoctors).toHaveBeenCalled();
		});
		it('searches the location of the user', async () => {
			componentInstance.onSearch();
			expect(baseProps.dispatchGetDoctors).toHaveBeenCalled();
			wrapper.setState({ userLocation: { latitude: 37.23, longitude: -122.23, }, searchText: '37.23,-122,100' });
			expect(wrapper.state('userLocation').latitude).toEqual(37.23);
			expect(wrapper.state('userLocation').longitude).toEqual(-122.23);

			baseProps.dispatchGetDoctors('37.23,-122,100');
			expect(baseProps.dispatchGetDoctors).toHaveBeenLastCalledWith('37.23,-122,100');
		});
	})
	describe('closeModalFunction', () => {
		it('resets the active doctor to initial state', () => {
			componentInstance.closeModal();
			expect(baseProps.dispatchResetActiveDoctor).toHaveBeenCalled();
		});
	})
	describe('updateSearch function', () => {
		const event = {
			target: { value: 'nj' }
		};
		it('updates the location text input ', () => {
			componentInstance.updateSearch(event);
			expect(wrapper.state('searchText')).toEqual('nj');
		});
	})
	describe('renderMobileViewActiveDoctor', () => {
		it('displays active doctor on mobile view', () => {
			const props = { ...baseProps, isMobileView: true }
			const home = shallow(<Home {...props} />);
			expect(home.find(<ActiveDoctor {...baseProps} />).exists).toBeTruthy();
			expect(home.find(<Modal handleClose={jest.fn()} />).exists).toBeTruthy();
		});
	})
})
