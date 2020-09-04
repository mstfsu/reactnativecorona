const INITIAL_STATE = {
  ControlGetData: 'false',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Get_Data':
      return {...state, ControlGetData: 'false'};
    // return INITIAL_STATE şeklinde dönderseydil state ler initial halini alırdı.
    case 'Get_Data_Control':
      return {...state, ControlGetData: 'true'};
    default:
      return state;
  }
};
