import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { CardView, Container } from './CardView';

describe('CardView of Doctors List', () => {
	const baseProps = {
		isMobileView: false,
		doctorData: {
			profile: {},
			specialties: [],
			practices: [{
				visit_address: {},
				phones: [],
				languages: [],
				profile: { image_url: '' }
			}],
		},
		dispatchSetActiveDoctor: jest.fn(),
		isActive: false,
	}
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
