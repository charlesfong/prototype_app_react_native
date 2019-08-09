import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Root } from "native-base";
import firebase from 'firebase';
import { Spinner } from './src/komponen';
import { colors } from './src/styles';

import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppViewContainer';
import LoginView from './src/modules/auth/LoginScreen';

export default class App extends React.Component {

  state = { loggedIn: false};

  componentWillMount() {
    // firebase.initializeApp({
    //     apiKey: "AIzaSyCHnJY8M8DBE8Mvdy_WXWrPOpd8cbY-o0Y",
    //     authDomain: "auth-2791b.firebaseapp.com",
    //     databaseURL: "https://auth-2791b.firebaseio.com",
    //     projectId: "auth-2791b",
    //     storageBucket: "",
    //     messagingSenderId: "898403896113",
    //     appId: "1:898403896113:web:e2f27f963a83d379"
    // });

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ loggedIn:true });
    //   } else {
    //     this.setState({ loggedIn:false });
    //   }
    // });
  }

  renderContent() {
    AsyncStorage.getItem('user', (error, result) => {
      if (result) {
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
              <AppView item={this.state.loggedIn} />
            </PersistGate>
          </Provider>
        );
      }
      // ini else nya
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
      // end of else
      
    });
    console.warn(this.state.loggedIn);
    switch (this.state.loggedIn) {
      case true:
          console.warn("disana");
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
              <AppView item={this.state.loggedIn} />
            </PersistGate>
          </Provider>
        );
      case false:
        console.warn("disini");
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
        {this.renderContent()}
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
