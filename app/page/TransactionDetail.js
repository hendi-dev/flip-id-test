import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  str_amount,
  str_close,
  str_created_date,
  str_transaction_detail,
  str_transaction_id,
  str_transfer_news,
  str_unique_code,
} from '../util/String';
import toTitleCase, {formatDate, formatPrice} from '../util/Util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  transactionIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  transactionDetailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 1,
  },
  bankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 6,
    marginTop: 2,
  },
  tableStyle: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  rowStyle: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cell1Style: {
    flex: 3,
  },
  cell2Style: {
    flex: 2,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  labelStyle2: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  labelStyle3: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  labelStyle4: {
    fontSize: 16,
    color: 'black',
  },
  closeButton: {
    fontSize: 18,
    fontWeight: '500',
    color: 'orange',
  },
});

const Cell = ({val1, val2, style}) => {
  return (
    <View style={style}>
      <Text style={styles.labelStyle}>{val1}</Text>
      <Text style={styles.labelStyle4}>{val2}</Text>
    </View>
  );
};

const Table = ({data}) => {
  return (
    <View style={styles.tableStyle}>
      <View style={styles.rowStyle}>
        <Cell
          style={styles.cell1Style}
          val1={data.beneficiary_name.toUpperCase()}
          val2={data.account_number.toUpperCase()}
        />
        <Cell
          style={styles.cell2Style}
          val1={str_amount.toUpperCase()}
          val2={formatPrice(data.amount).toUpperCase()}
        />
      </View>
      <View style={styles.rowStyle}>
        <Cell
          style={styles.cell1Style}
          val1={str_transfer_news.toUpperCase()}
          val2={data.remark}
        />
        <Cell
          style={styles.cell2Style}
          val1={str_unique_code.toUpperCase()}
          val2={data.unique_code}
        />
      </View>
      <View style={styles.rowStyle}>
        <Cell
          style={styles.cell1Style}
          val1={str_created_date.toUpperCase()}
          val2={formatDate(data.created_at)}
        />
      </View>
    </View>
  );
};

export default class TransactionDetail extends React.Component {
  render() {
    const data = this.props.route.params.data;

    return (
      <View style={styles.container}>
        <View style={styles.transactionIdContainer}>
          <Text
            style={styles.labelStyle}>{`${str_transaction_id.toUpperCase()}: #${
            data.id
          }`}</Text>
          <Icon
            name="clone"
            size={16}
            color="orange"
            style={{marginHorizontal: 12}}
          />
        </View>
        <View style={styles.transactionDetailHeader}>
          <Text style={styles.labelStyle2}>
            {str_transaction_detail.toUpperCase()}
          </Text>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.pop()}>
            <Text style={styles.closeButton}>{str_close}</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.bankContainer}>
          <Text style={styles.labelStyle3}>
            {toTitleCase(data.sender_bank)}
          </Text>
          <Icon
            name="arrow-right"
            size={20}
            color="black"
            style={{marginHorizontal: 12}}
          />
          <Text style={styles.labelStyle3}>
            {toTitleCase(data.beneficiary_bank)}
          </Text>
        </View>
        <Table data={data} />
      </View>
    );
  }
}
