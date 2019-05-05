import React from 'react';
import { shallow, mount } from 'enzyme';
import styled, { enzymeFind } from 'styled-components/test-utils'
import { DoctorsList, NoDataText } from './index'
import { CardView } from './CardView'

describe('DoctorsList', () => {
	let wrapper;
	const baseProps = {
		doctorsList: [],
		dispatchSetActiveDoctor: jest.fn(),
		activeDoctor: {},
		isMobileView: false,
		doctorsListLoading: false,
		getDoctorsError: ''
	};

	describe('doctors', () => {
		beforeAll(async () => {
			wrapper = await shallow(<DoctorsList {...baseProps} />);
			await wrapper.update();
		});

		afterAll(() => {
			baseProps.dispatchSetActiveDoctor.mockClear();
		});
		it('renders without crashing', () => {
			expect(wrapper.exists()).toBe(true);
		});
		it('renders empty doctors text when list is empty', () => {
			expect(wrapper.find(NoDataText).text()).toEqual('No doctors in the selected location');
		});
		it('renders loading when request is processing', () => {
			const props = { ...baseProps, doctorsListLoading: true }
			const wrapperInstance = shallow(<DoctorsList {...props} />)
			expect(wrapperInstance.find(NoDataText).text()).toEqual('loading...');
		});
	})
})
