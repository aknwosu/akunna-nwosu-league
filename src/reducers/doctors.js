const initialState = {
	doctorsList: [],
	activeDoctor: {}
}

export default function searchReducer(state = initialState, action) {
	switch (action.type) {
	case 'GET_DOCTORS_SUCCESS': {
		return { ...state, doctorsList: action.payload.data, activeDoctor: {} }
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
