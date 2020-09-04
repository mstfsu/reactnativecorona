import React from 'react';
import {StyleSheet} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {get_Data} from './actions';
import coronadata from './components/coronadata';
import coronaNews from './components/coronaNews';
import coronaAllCountry from './components/coronaAllCountry';

const RouterComponent = props => {
  return (
    <Router
      statusBarStyle="light-content"
      navigationBarStyle={{backgroundColor: '#414fb6'}}
      titleStyle={styles.textStyle}>
      <Scene key="main">
        <Scene
          key="coronadata"
          component={coronadata}
          title="Türkiye Güncel Verileri"
          initial
          renderBackButton={() => null}
        />
        <Scene
          renderBackButton={() => null}
          key="amerika"
          component={coronadata}
          title="USA Güncel Verileri"
          left={() => null}
        />
        <Scene
          renderBackButton={() => null}
          key="italy"
          component={coronadata}
          title="İtalya Güncel Verileri"
          left={() => null}
        />
        <Scene
          renderBackButton={() => null}
          key="News"
          component={coronaNews}
          title="Güncel Haberler"
          left={() => null}
        />
        <Scene
          renderBackButton={() => null}
          key="OtherCountries"
          component={coronaAllCountry}
          title="Diğer Ülkeler"
          left={() => null}
        />
      </Scene>
    </Router>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 23,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    flex: 1,
  },
});

export default connect(
  null,
  {get_Data},
)(RouterComponent);
