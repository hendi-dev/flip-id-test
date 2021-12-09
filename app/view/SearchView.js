import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {str_search_hint, str_sort} from '../util/String';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          placeholder={str_search_hint}
        />

        <TouchableWithoutFeedback onPress={this.onSort}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'orange', fontWeight: '500'}}>{str_sort}</Text>
            <Icon
              name="chevron-down"
              size={14}
              color="orange"
              style={{marginHorizontal: 8}}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  onSort() {
    console.log('MANTAB');
  }
}
