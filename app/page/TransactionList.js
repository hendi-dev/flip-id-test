import React from 'react';
import {StyleSheet, ActivityIndicator, FlatList, View} from 'react-native';
import {TransactionRepository} from '../repository/TransactionRepository';
import {
  str_name_a_to_z,
  str_name_z_to_a,
  str_newest_date,
  str_oldest_date,
} from '../util/String';
import {SearchView} from '../view/SearchView';
import {SortDialog} from '../view/SortDialog';
import {TransactionListItem} from '../view/TransactionListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default class TransactionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      onSort: false,
      sortType: null,
      dataTemp: [],
    };
  }

  componentDidMount() {
    this.getTransaction();
  }

  render() {
    const {data, isLoading, onSort, sortType} = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={styles.container}>
            <SearchView
              sortType={sortType}
              onClickSort={() => this.performSort(onSort)}
              onTextChanged={val => this.onSearch(val)}
            />
            <FlatList
              data={data}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <TransactionListItem
                  item={item}
                  onItemClick={() =>
                    this.props.navigation.navigate('TransactionDetail', {
                      data: item,
                    })
                  }
                />
              )}
            />
            <SortDialog
              modalVisible={onSort}
              onRequestClose={() => this.performSort(onSort)}
              sortType={sortType}
              onSortSelected={sortType => this.onSortSelected(sortType)}
            />
          </View>
        )}
      </View>
    );
  }

  performSort(onSort) {
    this.setState({onSort: !onSort});
  }

  onSortSelected(sortType) {
    const {data} = this.state;
    var sorted = null;

    if (sortType === str_name_a_to_z) {
      sorted = data.sort((a, b) =>
        a.beneficiary_name > b.beneficiary_name ? 1 : -1,
      );
    } else if (sortType === str_name_z_to_a) {
      sorted = data.sort((a, b) =>
        a.beneficiary_name < b.beneficiary_name ? 1 : -1,
      );
    } else if (sortType === str_newest_date) {
      sorted = data.sort((a, b) =>
        Date.parse(a.created_at) < Date.parse(b.created_at) ? 1 : -1,
      );
    } else if (sortType === str_oldest_date) {
      sorted = data.sort((a, b) =>
        Date.parse(a.created_at) > Date.parse(b.created_at) ? 1 : -1,
      );
    } else {
      return;
    }
    this.setState({data: sorted, onSort: false, sortType: sortType});
  }

  onSearch(keyword) {
    const {dataTemp} = this.state;

    let filtered = [];
    if (keyword === '') {
      filtered = dataTemp;
    } else {
      const key = keyword.toLowerCase();
      filtered = dataTemp.filter(item => {
        return (
          String(item.beneficiary_name.toLowerCase()).includes(key) ||
          String(item.sender_bank.toLowerCase()).includes(key) ||
          String(item.beneficiary_bank.toLowerCase()).includes(key) ||
          String(item.amount.toString().toLowerCase()).includes(key)
        );
      });
    }

    this.setState({data: filtered});
  }

  async getTransaction() {
    try {
      const repository = new TransactionRepository();
      const data = await repository.getTransaction();
      this.setState({data: data, dataTemp: data});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }
}
