import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import toTitleCase, {formatDate, formatPrice} from '../util/Util';

const cornerRadius = 8;

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
    marginTop: 6,
  },
  itemContainer: {
    margin: 16,
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
  },
  cardLeft: {
    width: 8,
    backgroundColor: 'green',
    position: 'relative',
    borderBottomStartRadius: cornerRadius,
    borderTopStartRadius: cornerRadius,
  },
});

export class TransactionListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onItemClick}>
        <View style={styles.card}>
          <View style={styles.cardLeft} />
          <View style={styles.itemContainer}>
            <Text style={styles.bankLabel}>
              {this.getBankLabel(
                this.props.item.sender_bank,
                this.props.item.beneficiary_bank,
              )}
            </Text>
            <Text style={styles.nameLabel}>
              {this.props.item.beneficiary_name.toUpperCase()}
            </Text>
            <Text style={styles.dateLabel}>
              {this.getAmountAndDateLabel(
                this.props.item.amount,
                this.props.item.created_at,
              )}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  getBankLabel(sender, beneficiary) {
    return toTitleCase(sender) + ' -> ' + toTitleCase(beneficiary);
  }

  getAmountAndDateLabel(amount, date) {
    return formatPrice(amount) + ' . ' + formatDate(date);
  }
}
