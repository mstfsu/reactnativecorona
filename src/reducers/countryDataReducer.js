const INITIAL_STATE = {
  CountryData: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Get_Country_Data':
      return {...state, CountryData: action.payload};
    // return INITIAL_STATE şeklinde dönderseydil state ler initial halini alırdı.
    default:
      return state;
  }
};
