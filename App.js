/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import Router from './src/Router';
import {Provider} from 'react-redux';
import {Container, Footer} from 'native-base';
import reducers from './src/reducers/index';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import FooterContent from './src/components/footer';

const App: () => React$Node = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Container>
        <Router />

        <Footer>
          <FooterContent />
        </Footer>
      </Container>
    </Provider>
  );
};
export default App;
