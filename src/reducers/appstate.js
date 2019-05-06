const initialState = {
	isMobileView: false,
}

export default function appStateReducer(state = initialState, action) {
	switch (action.type) {
	case 'SET_SCREEN_SIZE': {
		return { ...state, isMobileView: action.payload }
	}
	default: return state
	}
}
