import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from "native-base";
import firebase from 'firebase';
import { Spinner } from './src/komponen';
import { colors } from './src/styles';

import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppViewContainer';

export default class App extends React.Component {

  state = { loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyCHnJY8M8DBE8Mvdy_WXWrPOpd8cbY-o0Y",
        authDomain: "auth-2791b.firebaseapp.com",
        databaseURL: "https://auth-2791b.firebaseio.com",
        projectId: "auth-2791b",
        storageBucket: "",
        messagingSenderId: "898403896113",
        appId: "1:898403896113:web:e2f27f963a83d379"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn:true });
      } else {
        this.setState({ loggedIn:false });
      }
    });
  }

  renderContent() {
    console.warn(this.state.loggedIn);
    switch (this.state.loggedIn) {
      case true:
        return (
          <Provider store={store}>
            <PersistGate
              loading={(
                <View style={styles.container}>
                  <ActivityIndicator size="large" color={colors.red} />
                </View>
                )}
              persistor={persistor}
            >
              <AppView />
            </PersistGate>
          </Provider>
        );
      case false:
        return (
          <Provider store={store}>
            <PersistGate
              loading={(
                <View style={styles.container}>
                  <ActivityIndicator size="large" color={colors.red} />
                </View>
                )}
              persistor={persistor}
            >
              <AppView />
            </PersistGate>
          </Provider>
        );
      default:
        // return (
        //   <Provider store={store}>
        //     <PersistGate
        //       loading={(
        //         <View style={styles.container}>
        //           <ActivityIndicator color={colors.red} />
        //         </View>
        //         )}
        //       persistor={persistor}
        //     >
        //       <AppView />
        //     </PersistGate>
        //   </Provider>
        // );
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate
            loading={(
              <View style={styles.container}>
                {/* <ActivityIndicator color={colors.red} /> */}
                {this.renderContent()}
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
