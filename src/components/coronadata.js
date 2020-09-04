import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Get_Data, Get_Data_Control, Get_Country_Data} from '../actions';
import axios from 'axios';
import SpinnerComponent from './spinner';
import DataDetail from './DataDetail';
import * as countryName from '../countries/countries.json';

class coronadata extends Component {
  state = {data: []};

  componentDidMount() {
    if (this.props.CountryData.length === 0) {
      axios
        .get('https://api.collectapi.com/corona/countriesData', {
          headers: {
            authorization:
              'apikey 0bSiIRCOE9h1uiB2nnEfZx:2coEmt1ubplhT7vcTo8DDS',
            'content-type': 'application/json',
          },
        })
        .then(response => {
          this.setState({data: response.data.result});
          this.props.Get_Data_Control();
          this.props.Get_Country_Data(response.data.result);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      this.props.Get_Data_Control();
    }
  }
  renderGetDataControl() {
    if (this.props.ControlGetData === 'true') {
      return this.props.CountryData.filter(
        item => item.country === this.props.Country,
      ).map((responseData, id) => <DataDetail data={responseData} />);
    } else {
      return <SpinnerComponent />;
    }
  }
  render() {
    return (
      <View>
        <ScrollView>{this.renderGetDataControl()}</ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({Response, ResponseCountry, CountryDataReducer}) => {
  const {ControlGetData} = Response;
  const {Country} = ResponseCountry;
  const {CountryData} = CountryDataReducer;
  return {
    ControlGetData,
    Country,
    CountryData,
  };
};

export default connect(
  mapStateToProps,
  {Get_Data, Get_Data_Control, Get_Country_Data},
)(coronadata);
