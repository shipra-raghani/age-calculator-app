import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { View, Image, Text, Button, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [dob, setDob] = useState(new Date());
  const [age, setAge] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
    calculateAge(currentDate);
  };

  return (
 
    <View style={styles.container}>
    
      <Text style={styles.title}>Age Calculator </Text>

      <Button onPress={() => setShowDatePicker(true)} title="Select Your Date of Birth" />
      
      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      {age !== null && <Text style={styles.result}>Your Age Calculated is : {age} years</Text>}
      
      <Text style={styles.info}>Select your date of birth to calculate your age</Text>
      <Text style={styles.info}>(Make it Easy!)</Text>
    </View>
  );
 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8dbcf',
    padding: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    fontSize: 24,
    color: '#4f675f',
    marginTop: 20,
  },
  info: {
    fontSize: 16,
    color: '#4f675f',
    fontWeight: 'bold',
    marginTop: 10,
  },
  
});

export default App;
