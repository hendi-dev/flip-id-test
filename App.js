/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import TransactionList from './app/page/TransactionList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TransactionDetail from './app/page/TransactionDetail';
import {str_transaction_detail} from './app/util/String';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TransactionList"
          component={TransactionList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetail}
          options={{title: str_transaction_detail}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
