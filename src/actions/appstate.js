const SET_SCREEN_SIZE = 'SET_SCREEN_SIZE'

// eslint-disable-next-line import/prefer-default-export
export const onResizeScreen = () => async (dispatch) => {
	const isMobileView = window.innerWidth <= 768
	dispatch({ type: SET_SCREEN_SIZE, payload: isMobileView })
}
