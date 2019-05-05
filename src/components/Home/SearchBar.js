import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SearchIcon from '../../assets/Search.svg'


const SearchBar = (props) => {
	const {
		searchText, onSearch, updateSearch, isMobileView
	} = props
	return (
		<Container>
			<InputWrapper isMobileView={isMobileView}>
				<CTA onClick={() => onSearch('userLocation')}>Use your location</CTA>
				<Input
					autoFocus
					name="locationSearch"
					value={searchText}
					onChange={updateSearch}
					isMobileView={isMobileView}
				/>
				<CTASearch onClick={() => onSearch('userInput')} isMobileView={isMobileView} />
			</InputWrapper>
		</Container>
	)
}
SearchBar.propTypes = {
	searchText: PropTypes.string,
	updateSearch: PropTypes.func.isRequired,
	onSearch: PropTypes.func.isRequired,
	isMobileView: PropTypes.bool.isRequired
}
export default SearchBar

const Container = styled.div`
  background-color: #59A49F;
  padding-left: 70px;
  position: fixed;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 24px #DAECEC;
`

const Input = styled.input`
  width: ${({ isMobileView }) => (isMobileView ? '150px' : '335px')};
  height: 28px;
  max-width: 100%;
  border: 2px solid #59A49F;
  font-size: 14px;
  padding: 0 10px;
  background-color: #FFFFFF;
  margin-bottom: 0;
  border-width: 2px 2px 2px 0;
  border-radius: 0 31px 31px 0;
`
const InputWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #FFFFFF;
  padding-left: ${({ isMobileView }) => (isMobileView ? '10px' : '80px')};
`
const CTASearch = styled.div`
  background: url(${SearchIcon});
	position: absolute;
  background-position: center;
  width: 25px;
  height: 22px;
  background-repeat: no-repeat;
  top: 23px;
  left: ${({ isMobileView }) => (isMobileView ? '330px' : '582px;')};


`
const CTA = styled.div`
  width: 110px;
  height: 32px;
  background-color: #59A49F;
  border-radius: 30px 0px 0px 30px;
  font-size: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`
