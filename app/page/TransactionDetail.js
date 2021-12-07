import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const data = 'HENK';

export default class TransactionDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{data}</Text>
      </View>
    );
  }
}
