export const fetchFeeback = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts'); //to change later
    dispatch({
        type: 'FETCH_FEEDBACK',
        payload: response.data //to change later
    });
};
