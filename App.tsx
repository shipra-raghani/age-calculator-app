import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AgeCalculatorForm from './AgeCalculatorForm';
import {SafeAreaView} from 'react-native';
import AgeResult from './AgeResult';

const App = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#6da1a3',
        }}>
        <Image
          source={require('./Images/Logo4.jpeg')}
          style={{width: 100, height: 100, marginTop: 200, marginLeft: 160}}
        />

        <Text
          style={{
            paddingTop: 50,
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          AGE CALCULATOR
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
          }}>
          Welcome! Here you can calculate your Age
        </Text>

        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            paddingTop: 20,
          }}>
          (Click Here To Select)
        </Text>
      </View>
      <AgeCalculatorForm></AgeCalculatorForm>
      <AgeResult></AgeResult>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
