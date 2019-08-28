import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from "native-base";
import { colors } from './src/styles';
import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppViewContainer';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {

  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate
            loading={(
              <View style={styles.container}>
                <ActivityIndicator color={colors.red} />
              </View>
              )}
            persistor={persistor}
          >
            <AppView />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
