import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export class SortDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={this.props.onRequestClose}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
          </View>
        </View>
      </Modal>
    );
  }
}
