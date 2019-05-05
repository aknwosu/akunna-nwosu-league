import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import styled from 'styled-components'
import {
	SearchBar, CTA, CTASearch, Input
} from './index';

describe('SearchBarComponent', () => {
	const baseProps = {
		isMobileView: false,
		updateSearch: jest.fn(),
		onSearch: jest.fn(),
		searchText: '',
	};
	let wrapper;

	beforeAll(() => {
		wrapper = shallow(<SearchBar {...baseProps} />);
	});

	it('renders without crashing', () => {
		shallow(<SearchBar {...baseProps} />);
	});
	it('trigger the click to search your location event', () => {
		expect(wrapper.find('input')).toHaveLength(0)
		wrapper.find(CTA).simulate('click');
		expect(baseProps.onSearch).toHaveBeenCalled();
	})
	it('trigger text change event', () => {
		const event = { target: { name: 'locationSearch', value: 'nj' } };
		wrapper.find(Input).simulate('change', event);
		expect(baseProps.updateSearch).toHaveBeenCalled();
	});
	it('trigger search event', () => {
		wrapper.find(CTASearch).simulate('click');
		expect(baseProps.onSearch).toHaveBeenCalled();
	});
})
