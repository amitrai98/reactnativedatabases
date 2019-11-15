import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Realm from 'realm';

export class RealmStore extends Component {
  constructor(props) {
    super(props);
    this.state = {realm: null};
  }

  componentDidMount() {
    Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}],
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'Rex'});
      });
      this.setState({realm});
    });
  }

  render() {
    const info = this.state.realm
      ? 'Number of dogs in this Realm: ' +
        this.state.realm.objects('Dog').length
      : 'Loading...';

    return (
      <View style={{flex: 1, alignSelf: 'center', marginTop: 50}}>
        <Text>{info}</Text>
      </View>
    );
  }
}

export default RealmStore;
