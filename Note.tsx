import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
//import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import Main from './Main';

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>DEL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: 'black',
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
    color: 'white',
  },
  noteDeleteText: {
    color: 'white',
  },
});
