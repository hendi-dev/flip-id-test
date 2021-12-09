import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import {
  str_name_a_to_z,
  str_newest_date,
  str_oldest_date,
  str_name_z_to_a,
  str_sort,
} from '../util/String';
import SortDialogView from './SortDialogView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

const options = [
  {
    key: str_sort,
    text: str_sort,
  },
  {
    key: str_name_a_to_z,
    text: str_name_a_to_z,
  },
  {
    key: str_name_z_to_a,
    text: str_name_z_to_a,
  },
  {
    key: str_newest_date,
    text: str_newest_date,
  },
  {
    key: str_oldest_date,
    text: str_oldest_date,
  },
];

export class SortDialog extends React.Component {
  render() {
    const sortType =
      this.props.sortType !== null ? this.props.sortType : str_sort;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={this.props.onRequestClose}>
        <View style={styles.container}>
          <SortDialogView
            options={options}
            value={sortType}
            onSortSelected={this.props.onSortSelected}
          />
        </View>
      </Modal>
    );
  }
}
