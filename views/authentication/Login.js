import React, { Component } from "react";
import { View, Alert, Text, Image, StyleSheet,KeyboardAvoidingView } from "react-native";
import CommonStyle from "../../style/comman";
import CommonStrings from "../../config/string";
import { Input, Button } from 'react-native-elements'
import dimen from '../../config/dimen'
import colors from "../../config/colors";
import {goToRootScreen} from "../AppNavigator"
import {validate} from "../../utility/validation";

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
      headerStyle: {
      backgroundColor: '#ffffff',
    },
  
    headerTintColor: colors.colorPrimary,
    headerTitleStyle: {
    width:'90%',
      fontWeight: 'bold',
      alignSelf:'center'

    },
  };
  constructor(props) {
    super(props)

   this.state = {
      controls: {
        email: {
          value: "",
          valid: false,
          validationRules: {
            isEmail: true
          }
        },
        password: {
          value: "",
          valid: false,
          validationRules: {
            minLength: 6
          }
        },
       },
    }
}

  componentDidMount() {
    //this method call when page visible to user
    // this.callAlert(Constants.alert_title, "Email: johndoe@gmail.com | Password: 123456", null)
  }

  setEmail(email) {
    this.setState({ email })
  }

  setPassword(password) {
    this.setState({ password })
  }
  startDrawerScreen = () => {
         goToRootScreen(CommonStrings.screen_home,"Home")
    }

  callAlert(title, message, func) {
    Alert.alert(
      title, message,
      [
        { text: 'OK', onPress: () => func },
      ],
      { cancelable: false }
    )
  }
   render() {
    return (
      <KeyboardAvoidingView style={CommonStyle.container}  behavior="padding" enabled>
      <View style={CommonStyle.container}>

        <Image source={require('../../assets/ic_salogo.png')} style={CommonStyle.image} />
        <View style={CommonStyle.verticalView}>
          <Text style={styles.titleText}>{CommonStrings.str_welcome}</Text>
          <Text style={styles.smallText}>{CommonStrings.str_credentials}</Text>
          <Input containerStyle={styles.inputContainer} inputStyle={styles.input} placeholder="Email" value={this.state.controls.email.value} onChangeText={val => this.validateUserInput("email",val)} />
          <Input containerStyle={styles.inputContainer} inputStyle={styles.input} placeholder="Password" value={this.state.controls.password.value} onChangeText={val => this.validateUserInput("password",val)} />
         <View style = {CommonStyle.horizontalView}>
         
         <Button buttonStyle={styles.buttonStyle} title={CommonStrings.action_login} onPress={this.startDrawerScreen} />
         </View>
          <Text style={styles.forgotStyle} onPress ={this.navigateToForgotPasswordPage}>{CommonStrings.str_forgotpassword}</Text>
        </View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

validateUserInput=(key,value)=>{
  let connectedValue = {};
  if (this.state.controls[key].validationRules.equalTo) {
    const equalControl = this.state.controls[key].validationRules.equalTo;
    const equalValue = this.state.controls[equalControl].value;
    connectedValue = {
      ...connectedValue,
      equalTo: equalValue
    };
  }

  this.setState(prevState => {
    return {
      controls: {
        ...prevState.controls,
         [key]: {
          ...prevState.controls[key],
          value: value,
          valid: validate(
            value,
            prevState.controls[key].validationRules,
            connectedValue
          )
        }
      }
    };
  });
}

const styles = StyleSheet.create({
  titleText: {
    width: '100%',
    fontSize: dimen.fontNormal,
    color: colors.night,
    fontWeight: 'bold',
  },
  smallText: {
    width: '100%',
    fontSize: dimen.fontSmall,
    color: colors.night,
    marginBottom: dimen.marginTiny
  },
  inputContainer: {
    width: "62%",
    margin: dimen.marginTiny,
    alignItems: 'center',
  },
  buttonStyle: {
    width:'100%',
    alignItems: 'stretch',
    marginTop:dimen.marginSmall,
    marginBottom:dimen.marginSmall,
    backgroundColor:colors.colorPrimary,
  },
  input: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: dimen.fontNormal,
    flex: 1,
    minHeight: 40,
  },
  forgotStyle: {
    width: '100%',
    fontSize: dimen.fontSmall,
    color: colors.colorPrimary,
    margin: dimen.marginTiny
  },

})

