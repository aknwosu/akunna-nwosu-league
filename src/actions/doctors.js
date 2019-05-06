import axios from 'axios';

const GET_DOCTORS_REQUEST = 'GET_DOCTORS_REQUEST'
const GET_DOCTORS_SUCCESS = 'GET_DOCTORS_SUCCESS'
const GET_DOCTORS_FAILURE = 'GET_DOCTORS_FAILURE'
const SET_ACTIVE_DOCTOR = 'SET_ACTIVE_DOCTOR'
const RESET_ACTIVE_DOCTOR = 'RESET_ACTIVE_DOCTOR'
const { REACT_APP_ROOT_URL, REACT_APP_BETTER_DOC_API } = process.env

export const getDoctors = (location = '37.773,-122.413,100', skip = 0) => async (dispatch) => {
	try {
		dispatch({ type: GET_DOCTORS_REQUEST })
		const request = await axios.get(`${REACT_APP_ROOT_URL}/2016-03-01/doctors?location=${location}&sort=distance-asc&skip=${skip}&limit=10&user_key=${REACT_APP_BETTER_DOC_API}`)
		dispatch({
			type: GET_DOCTORS_SUCCESS,
			payload: request.data,
			currentLocation: location
		})
	} catch (error) {
		dispatch({ type: GET_DOCTORS_FAILURE })
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
