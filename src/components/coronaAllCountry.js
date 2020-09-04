import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
import {connect} from 'react-redux';
import {Get_Data, Get_Data_Control, Get_Country_Data} from '../actions';
import countryName from '../countries/countries.json';
import DataDetail from './DataDetail';

class coronaAllCountry extends Component {
  state = {
    selectedCountry: countryName[0].name,
    SelectedLabel: countryName[0].label,
  };
  renderGetDataControl() {
    return countryName.map((responseData, id) => (
      <Picker.Item value={responseData.name} label={responseData.label} />
    ));
  }
  renderLabel() {
    console.log('girdi');
    return countryName
      .filter(item => item.name === this.state.selectedCountry)
      .map((responseData, id) => (
        <Text style={{color: 'blue', fontSize: 18}}>{responseData.label}</Text>
      ));
  }
  renderCoronaData() {
    if (this.state.selectedCountry !== '') {
      return this.props.CountryData.filter(
        item => item.country === this.state.selectedCountry,
      ).map((responseData, id) => <DataDetail data={responseData} />);
    } else {
      return <Text> Bilgilerini görmek istediğniz ülkeyi seçiniz. </Text>;
    }
  }
  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.selectedCountry}
          onValueChange={name => this.setState({selectedCountry: name})}>
          {this.renderGetDataControl()}
        </Picker>
        <Text style={{fontSize: 15, padding: 5}}>
          Verileri Getirilen Ülke : {this.renderLabel()}
        </Text>
        {this.renderCoronaData()}
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
)(coronaAllCountry);
