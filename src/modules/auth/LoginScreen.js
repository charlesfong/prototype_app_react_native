import React from 'react';
import { TouchableOpacity } from 'react-native';
// import PropTypes from 'prop-types';
import { Form, Button, Text, Item, Icon, Input } from 'native-base';
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase';
import { Spinner } from '../../komponen';
// import LoginButtons from './InputComponents/LoginButtons';



export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: [],
    };
  }

  state = { email: ' ', password: ' ', error: ' ',loading: false };

  

  changeInputFocus = index => () => {
    if (index === 0) {
      this.state.inputs[index+1].state.inputRef._root.focus(); // eslint-disable-line
    }
  };

//   updateCanLoginState = () => {
//     let canLogin = true;
//     this.state.inputs.forEach((child) => {
//       if (child.state.isCorrect !== 1) {
//         canLogin = false;
//       }
//     });
//     this.loginButtons.loginButton.updateCanLogin(
//       canLogin, this.state.inputs[0].state.value,
//       this.state.inputs[1].state.value,
//     );
//   };

  clearAllInputs = () => {
    this.state.inputs.forEach((child) => {
      child.clearInput();
    });
  };

  forgotPassword = () => {
    console.warn(this.state.email.trim()); // eslint-disable-line
  };

  onButtonPress = () => {
    if (this.state.email === "" || this.state.password === "") {
      this.setState({ error: 'Please Fill The Data'});
    } else {
      this.setState({loading:true})
    firebase.auth().signInWithEmailAndPassword(this.state.email.trim(), this.state.password)
    // .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(this.state.email.trim(), this.state.password)
      .catch(() => {
        this.setState({ error: 'Auth Failed'});
      });
    });
    console.warn(this.state);
    }
    
  };

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button
        bordered
        activeOpacity={0.5}
        onPress={this.onButtonPress}
        style={{
        alignSelf: 'center', justifyContent: 'center',
      }}
      
      >
        <Text
          uppercase={false}
        >
        Login
        </Text>
      </Button>
    );
  }

  render() {
    return (
      <Animatable.View
        animation="fadeInRight"
        delay={1200}
        duration={700}
        // ref={(ref) => { this.animationView = ref; }}
        // style={GLOBAL.loginScreenStyle.mainView}
      >
        <Form>
          {/* <Email
            changeFocus={this.changeInputFocus(0)}
            update={this.updateCanLoginState}
            ref={(ref) => { this.state.inputs[0] = ref; }}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          /> */}
          <Item
            style={{
            //   marginTop: this.props.special ? 1 / 70 : 0,
            //   width: (1 * 7) / 10,
            //   height:   13,
            //   borderBottomColor: mainThemeColor,
            }}
          >
            <Icon
              name="md-mail"
              style={{
                // color: mainThemeColor, fontSize: GLOBAL.totalSize(2.61), marginLeft: -width / 400,
              }}
            />
            <Input
            //   {...GLOBAL.inputTextStyle}
            //   blurOnSubmit={false}
              returnKeyType="next"
              ref={(ref) => { this.state.inputRef = ref; }}
              autoCapitalize="none"
              keyboardType="email-address"
            //   placeholder={language.email}
              onSubmitEditing={this.props.changeFocus}
              onChangeText={email => this.setState({email})}
              value={this.state.email}
              onEndEditing={this.checkIfIsCorrect}
            />
            
            {/* {GLOBAL.checkMarksArray[this.state.isCorrect]} */}
          </Item>
          <Item style={{
            // marginTop: this.props.special ?   70 :   40,
            // width: (  7) / 10,
            // borderBottomColor: mainThemeColor,
          }}
          >
            <Icon
              name="md-lock"
              style={{
                // color: mainThemeColor, fontSize: GLOBAL.totalSize(2.61), marginLeft: width / 200,
              }}
            />
            <Input
            //   {...GLOBAL.inputTextStyle}
              // blurOnSubmit={!this.props.special}
              // returnKeyType={keyType}
              // ref={(ref) => { this.state.inputRef = ref; }}
              autoCapitalize="none"
            //   placeholder={language.password}
              // onSubmitEditing={this.props.changeFocus}
              secureTextEntry
              onChangeText={password => this.setState({password})}
              value={this.state.password}
              // onEndEditing={this.checkIfIsCorrect}
            />
            {/* {GLOBAL.checkMarksArray[this.state.isCorrect]} */}
          </Item>
        </Form>
        <TouchableOpacity onPress={this.forgotPassword} activeOpacity={0.5} style={{ marginTop:  25, alignItems: 'center' }}>
          <Text>asdas</Text>
        </TouchableOpacity>
        <Text>
          {this.state.error} ini state error
        </Text>
        {this.renderButton()}
      </Animatable.View>
    );
  }
}

// LoginScreen.propTypes = {
//   move: PropTypes.func.isRequired,
// };