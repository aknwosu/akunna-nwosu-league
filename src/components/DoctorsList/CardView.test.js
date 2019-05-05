import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { CardView, Container } from './CardView';

describe('CardView of Doctors List', () => {
	const baseProps = {
		isMobileView: false,
		doctorData: { specialties: [], practices: [{ distance: 0.1367, phones: [] }], profile: {} },
		dispatchSetActiveDoctor: jest.fn(),
		isActive: false,
	};
	let wrapper;

	beforeAll(() => {
		wrapper = shallow(<CardView {...baseProps} />);
	});
	it('renders without crashing', () => {
		shallow(<CardView {...baseProps} />);
	});
	it('trigger the click to search your location event', () => {
		wrapper.find(Container).simulate('click');
		expect(baseProps.dispatchSetActiveDoctor).toHaveBeenCalled();
	})
});
