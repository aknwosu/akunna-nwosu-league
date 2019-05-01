const initialState = {
	doctorsList: [],
	activeDoctor: {}
}

export default function searchReducer(state = initialState, action) {
	switch (action.type) {
	case 'GET_DOCTORS_SUCCESS': {
		return { ...state, doctorsList: action.payload.data }
	}

	case 'SET_ACTIVE_DOCTOR': {
		return { ...state, activeDoctor: action.payload }
	}
	default: return state
	}
}
