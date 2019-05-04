import axios from 'axios';

const GET_DOCTORS_SUCCESS = 'GET_DOCTORS_SUCCESS'
const SET_ACTIVE_DOCTOR = 'SET_ACTIVE_DOCTOR'
const RESET_ACTIVE_DOCTOR = 'RESET_ACTIVE_DOCTOR'
const { REACT_APP_ROOT_URL, REACT_APP_BETTER_DOC_API } = process.env

export const getDoctors = (location = '37.773,-122.413,100') => async (dispatch) => {
	try {
		const request = await axios.get(`${REACT_APP_ROOT_URL}/2016-03-01/doctors?location=${location}&sort=distance-asc&skip=0&limit=10&user_key=${REACT_APP_BETTER_DOC_API}`)
		dispatch({
			type: GET_DOCTORS_SUCCESS,
			payload: request.data
		})
	} catch (error) {

	}
}

export const setActiveDoctor = doctorData => async (dispatch) => {
	dispatch({
		type: SET_ACTIVE_DOCTOR,
		payload: doctorData
	})
}

export const resetActiveDoctor = () => async (dispatch) => {
	dispatch({
		type: RESET_ACTIVE_DOCTOR,
	})
}
