export const Get_Data = () => {
  return dispatch => {
    dispatch({
      type: 'Get_Data',
    });
  };
};
export const Get_Data_Control = () => {
  return dispatch => {
    dispatch({
      type: 'Get_Data_Control',
    });
  };
};
export const Get_Country = text => {
  return dispatch => {
    dispatch({
      type: 'Get_Country',
      payload: text,
    });
  };
};
export const Get_Country_Data = data => {
  return dispatch => {
    dispatch({
      type: 'Get_Country_Data',
      payload: data,
    });
  };
};
