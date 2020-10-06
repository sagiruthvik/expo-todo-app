import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
//import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
//import Main from './Main';
import Note from './Note';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Todo</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="Write Notes"
            placeholderTextColor="white"
            underlineColorAndroid="transparent">
            </TextInput>
        </View>

        <View style={styles.addButton}>
          <Button
            onPress={this.addNote.bind(this)}
            style={{ color: 'white' }}
            title="Add Notes"
          />
        </View>
      </View>
    );
  }
  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' });
    }else{
      alert("no notes to add");
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:300,
    position: "relative"
  },
  header: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 40,
    borderBottomColor: 'green',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 15,
  },
  footer: {
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 0,
  },
  addButton: {
    backgroundColor: '#FFEBCD',
  },
  // addButtonText:{
  // color:"white",
  // position:"absolute",
  // zIndex:1,
  // color:"red",
  // fontSize:104,
  //   left:340,
  //  bottom:40,
  // backgroundColor:"black",
  // borderColor:'black',
  // borderWidth : 3,
  // borderRadius : 50,
  // borderRadius:50,
  // alignItems:"center",
  // justifyContent:"center",
  // elevation:8,
  // },
  // addButtonText:{
  //   color:"white",
  //   fontSize:34,
  //   bottom:550,
  //   left:330,
  //   zIndex:1,
  //   backgroundColor:"red",
  //   width:50,
  //   borderColor:"white",
  //   borderWidth:2,
  //   borderRadius:40,
  // },
});
