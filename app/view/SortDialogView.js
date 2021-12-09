import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class SortDialogView extends Component {
  state = {
    options: this.props.options,
    selected: this.props.value,
  };

  render() {
    const {options, selected} = this.state;

    return (
      <View style={styles.card}>
        {options.map(res => {
          return (
            <View key={res.key} style={styles.container}>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  this.setState({
                    selected: res.key,
                  });
                  this.props.onSortSelected(res.key);
                }}>
                {selected === res.key && <View style={styles.selectedRb} />}
              </TouchableOpacity>
              <Text style={styles.radioText}>{res.text}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    paddingHorizontal: 24,
    paddingTop: 24,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
  },
  container: {
    marginBottom: 24,
    alignItems: 'center',
    flexDirection: 'row',
  },
  radioText: {
    marginStart: 16,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: 'orange',
  },
});
