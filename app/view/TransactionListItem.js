import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import toTitleCase, {formatDate, formatPrice} from '../util/Util';

const cornerRadius = 8;

const baseStatusStyle = {
  height: 32,
  paddingHorizontal: 8,
  margin: 8,
  borderRadius: cornerRadius,
  textAlignVertical: 'center',
  fontWeight: '700',
};

const succesStatusStyle = {
  ...baseStatusStyle,
  backgroundColor: 'green',
  color: 'white',
};

const pendingStatusStyle = {
  ...baseStatusStyle,
  borderColor: 'orange',
  borderWidth: 1,
  color: 'orange',
};

const baseCardLeft = {
  width: 8,
  height: '100%',
  borderBottomStartRadius: cornerRadius,
  borderTopStartRadius: cornerRadius,
};

const successCardLeft = {
  ...baseCardLeft,
  backgroundColor: 'green',
};

const pendingCardLeft = {
  ...baseCardLeft,
  backgroundColor: 'orange',
};

const styles = StyleSheet.create({
  bankLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  nameLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginTop: 6,
  },
  dateLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  itemContainer: {
    margin: 16,
    flex: 1,
  },
  card: {
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: cornerRadius,
    marginHorizontal: 8,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLeft: {
    width: 8,
    height: '100%',
    backgroundColor: 'green',
    borderBottomStartRadius: cornerRadius,
    borderTopStartRadius: cornerRadius,
  },
  succesStatusStyle,
  pendingStatusStyle,
  successCardLeft,
  pendingCardLeft,
});

export class TransactionListItem extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onItemClick}>
        <View style={styles.card}>
          <View style={this.getCardLeftStyle(this.props.item.status)} />
          <View style={styles.itemContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.bankLabel}>
                {toTitleCase(this.props.item.sender_bank)}
              </Text>
              <Icon
                name="arrow-right"
                size={14}
                color="black"
                style={{marginHorizontal: 8}}
              />
              <Text style={styles.bankLabel}>
                {toTitleCase(this.props.item.beneficiary_bank)}
              </Text>
            </View>
            <Text style={styles.nameLabel}>
              {this.props.item.beneficiary_name.toUpperCase()}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 6,
              }}>
              <Text style={styles.dateLabel}>
                {formatPrice(this.props.item.amount)}
              </Text>
              <Icon
                name="circle"
                size={8}
                color="black"
                style={{marginHorizontal: 8}}
              />
              <Text style={styles.dateLabel}>
                {formatDate(this.props.item.created_at)}
              </Text>
            </View>
          </View>
          <Text style={this.getStatusStyle(this.props.item.status)}>
            {toTitleCase(this.props.item.status)}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  getCardLeftStyle(status) {
    if (status.toLowerCase() === 'success') {
      return styles.successCardLeft;
    } else {
      return styles.pendingCardLeft;
    }
  }

  getStatusStyle(status) {
    if (status.toLowerCase() === 'success') {
      return styles.succesStatusStyle;
    } else {
      return styles.pendingStatusStyle;
    }
  }
}
