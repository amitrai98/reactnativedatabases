/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import FastImage from 'react-native-fast-image';
import RealmStore from './RealmStore';

const YourImage = () => (
  <FastImage
    style={{width: 200, height: 200}}
    source={{
      uri:
        'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?cs=srgb&dl=photography-of-person-walking-on-road-1236701.jpg&fm=jpg',
      headers: {Authorization: 'someAuthToken'},
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
);

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.engine}>
        {YourImage()}
        <Text style={styles.footer}>api call</Text>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <RealmStore />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    flex: 1,
  },

  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
