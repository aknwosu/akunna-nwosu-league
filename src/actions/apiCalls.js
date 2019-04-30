import axios from 'axios';

const { REACT_APP_ROOT_URL, REACT_APP_BETTER_DOC_API } = process.env

export const getDoctors = () => async dispatch => {
  try {
    const request = await axios.get(`${REACT_APP_ROOT_URL}/2016-03-01/doctors?location=37.773%2C-122.413%2C100&sort=distance-asc&skip=0&limit=10&user_key=${REACT_APP_BETTER_DOC_API}`)
    dispatch({
      type: 'GET_DOCTORS_SUCCESS',
      payload: request.data
    })

  } catch (error) {
    
  }
}