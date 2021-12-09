import React from 'react';
import {StyleSheet, ActivityIndicator, FlatList, View} from 'react-native';
import {TransactionRepository} from '../repository/TransactionRepository';
import {SearchView} from '../view/SearchView';
import {SortDialog} from '../view/SortDialog';
import {TransactionListItem} from '../view/TransactionListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class TransactionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      onSort: false,
    };
  }

  componentDidMount() {
    this.getTransaction();
  }

  render() {
    const {data, isLoading, onSort} = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={styles.container}>
            <SearchView onClickSort={() => this.performSort(onSort)} />
            <FlatList
              data={data}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <TransactionListItem
                  item={item}
                  onItemClick={() =>
                    this.props.navigation.navigate('TransactionDetail')
                  }
                />
              )}
            />
            <SortDialog
              modalVisible={onSort}
              onRequestClose={() => this.performSort(onSort)}
            />
          </View>
        )}
      </View>
    );
  }

  performSort(onSort) {
    this.setState({onSort: !onSort});
  }

  async getTransaction() {
    try {
      const repository = new TransactionRepository();
      this.setState({data: await repository.getTransaction()});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }
}

export default TransactionList;
