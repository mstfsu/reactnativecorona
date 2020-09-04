import {combineReducers} from 'redux';
import ilkprojereducer from './coronaReducers';
import countryreducer from './countryReducer';
import countryDatareducer from './countryDataReducer';

export default combineReducers({
  Response: ilkprojereducer,
  ResponseCountry: countryreducer,
  CountryDataReducer: countryDatareducer,
});
