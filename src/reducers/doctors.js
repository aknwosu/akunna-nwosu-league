const initialState = {
	doctorsList: [],
	doctorsListLoading: false,
	activeDoctor: {},
	getDoctorsError: ''
}

export default function searchReducer(state = initialState, action) {
	switch (action.type) {
	case 'GET_DOCTORS_SUCCESS': {
		return {
			...state,
			doctorsList: action.payload.data,
			activeDoctor: {},
			getDoctorsError: '',
			doctorsListLoading: false,
		}
	}
	case 'GET_DOCTORS_REQUEST': {
		return {
			...state,
			doctorsListLoading: true,
			getDoctorsError: ''
		}
	}
	case 'GET_DOCTORS_FAILURE': {
		return {
			...state,
			getDoctorsError: 'An error occured, please check your input and try again',
			activeDoctor: {},
			doctorsList: [],
			doctorsListLoading: false,
		}
	}

	case 'SET_ACTIVE_DOCTOR': {
		return { ...state, activeDoctor: action.payload }
	}
	case 'RESET_ACTIVE_DOCTOR': {
		return { ...state, activeDoctor: {} }
	}
	default: return state
	}
}
