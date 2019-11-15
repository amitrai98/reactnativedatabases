import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'react-native-firebase';

export class FirebaseTest extends Component {
  componentDidMount() {
    console.log(`token is ${JSON.stringify(firebase)}`);
    firebase
      .database()
      .ref('users/001')
      .set({
        name: 'amit',
        age: 27,
      })
      .then(respose => {
        console.log(`sucess ${response}`);
      })
      .catch(error => {
        console.log(`sucess ${error}`);
      });
  }
  render() {
    return (
      <View style={{marginTop: 40, alignSelf: 'center'}}>
        <Text>firebase initialization</Text>
      </View>
    );
  }
}

export default FirebaseTest;
