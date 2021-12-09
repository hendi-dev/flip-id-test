import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

// styles
const styles = StyleSheet.create({
  searchBar: {
    margin: 8,
    padding: 8,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  input: {
    height: 40,
    padding: 10,
    flex: 1,
  },
});

const placeHolder = 'Cari nama, bank, atau nominal';

export class SearchView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  render() {
    const {text} = this.state;

    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          onChangeText={value => this.setState({text: value})}
          value={text}
          placeholder={placeHolder}
        />

        <TouchableWithoutFeedback onPress={this.onSort}>
          <View style={{flexDirection: 'row'}}>
            <Text>URUTKAN</Text>
            <Text> V</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  onSort() {
    console.log('MANTAB');
  }
}
