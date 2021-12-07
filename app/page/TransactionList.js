import React from 'react';
import {StyleSheet, ActivityIndicator, FlatList, View} from 'react-native';
import {TransactionRepository} from '../repository/TransactionRepository';
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
    };
  }

  componentDidMount() {
    this.getTransaction();
  }

  render() {
    const {data, isLoading} = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
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
        )}
      </View>
    );
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
