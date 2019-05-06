import React from 'react';
import { shallow } from 'enzyme';
import { DetailsView } from './DetailsView'

it('renders without crashing', () => {
	const baseProps = {
		isMobileView: false,
		updateShowingAll: jest.fn(),
		activeDoctor: {
			practices: [],
			specialties: [],
			insurances: [],
			profile: {
				image_url: 'test_image_url', last_name: 'lastName', first_name: 'test_first_name', bio: 'vert short', title: 'testTitle'
			}
		},
		showingAllInsurances: false
	};
	shallow(<DetailsView {...baseProps} />);
});
