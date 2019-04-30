const initialState = {
  doctorsList: [],
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_DOCTORS_SUCCESS': {
      return { ...state, doctorsList: action.payload.data }
    }
    default: return state
  }
}