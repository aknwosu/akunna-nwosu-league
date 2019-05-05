import React from 'react';
import { shallow, mount } from 'enzyme';
import styled, { enzymeFind } from 'styled-components/test-utils'

import { ActiveDoctor, Container, Wrapper } from './index';

describe('ActiveDoctor Component', () => {
	let wrapper; let componentInstance;
	const baseProps = {
		activeDoctor: { uid: '1231j' }, isMobileView: false
	}

	describe('Doctor', () => {
		beforeAll(() => {
			wrapper = shallow(<ActiveDoctor {...baseProps} />);
			componentInstance = wrapper.instance();
			wrapper.instance().forceUpdate();
		});

		afterAll(() => {
			baseProps.dispatchSetActiveDoctor.mockClear();
		});
		it('renders without crashing', () => {
			shallow(<ActiveDoctor {...baseProps} />);
		});
		it('has the correct initial state', () => {
			wrapper.setState({ showingAllInsurances: false })
			expect(wrapper.state('showingAllInsurances')).toEqual(false);
		});

		it('updates showingAllInsurances', () => {
			componentInstance.updateShowingAll();
			expect(wrapper.state('showingAllInsurances')).toEqual(true);
		});
	})
})
