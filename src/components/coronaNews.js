import React, {Component} from 'react';
import {Image, ScrollView, View} from 'react-native';
import axios from 'axios';
import CoronaNewsDetail from './CoronaNewsDetail';
import SpinnerComponent from './spinner';
import {connect} from 'react-redux';
import {Get_Data_Control} from '../actions';

class coronaNews extends Component {
  state = {data: []};

  componentDidMount() {
    axios
      .get('https://api.collectapi.com/corona/coronaNews', {
        headers: {
          authorization: 'apikey 0bSiIRCOE9h1uiB2nnEfZx:2coEmt1ubplhT7vcTo8DDS',
          'content-type': 'application/json',
        },
      })
      .then(response => {
        this.setState({data: response.data.result});
        this.props.Get_Data_Control();
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  renderGetDataControl() {
    if (this.props.ControlGetData === 'true') {
      return <CoronaNewsDetail data={this.state.data} />;
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

const mapStateToProps = ({Response}) => {
  const {ControlGetData} = Response;
  return {
    ControlGetData,
  };
};

export default connect(
  mapStateToProps,
  {Get_Data_Control},
)(coronaNews);
