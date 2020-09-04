const INITIAL_STATE = {
  Country: 'Turkey',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Get_Country':
      return {...state, Country: action.payload};
    // return INITIAL_STATE şeklinde dönderseydil state ler initial halini alırdı.
    default:
      return state;
  }
};
