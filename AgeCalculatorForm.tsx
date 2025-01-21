import React, {useState} from 'react';
import {View, Text, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [age, setAge] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  // Function to handle date selection
  const onChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setBirthDate(selectedDate);
      calculateAge(selectedDate);
    }
  };

  // Function to calculate age
  const calculateAge = selectedDate => {
    const today = new Date();
    let age = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();
    const dayDiff = today.getDate() - selectedDate.getDate();

    // Adjust age if birthday hasn't occurred yet in the current year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    setAge(age);
  };

  return (
    <View style={{alignItems: 'center', backgroundColor: '#6da1a3'}}>
      <Text style={{fontSize: 12}}></Text>

      <Button title="Select Birth Date" onPress={() => setShowPicker(true)} />

      {showPicker && (
        <DateTimePicker
          value={birthDate}
          mode="date"
          display="spinner"
          onChange={onChange}
        />
      )}

      <Text style={{paddingTop: 10, fontSize: 14}}>
        Selected Date: {birthDate.toDateString()}
      </Text>

      {age !== null && (
        <Text style={{marginTop: 20, fontSize: 22, fontWeight: 'bold'}}>
          Your Age: {age} years
        </Text>
      )}
      <Text style={{paddingTop: 10, textAlign: 'center'}}></Text>
      <Text style={{paddingTop: 10, textAlign: 'center'}}></Text>
      <Text style={{paddingTop: 10, textAlign: 'center'}}></Text>
      <Text style={{paddingTop: 10, textAlign: 'center'}}></Text>
      <Text style={{paddingTop: 10, textAlign: 'center'}}></Text>
      <Text style={{paddingTop: 10, textAlign: 'center'}}></Text>
      <Text style={{paddingTop: 10, textAlign: 'center'}}></Text>
      <Text style={{paddingTop: 10, textAlign: 'center'}}></Text>
      <Text style={{paddingTop: 10, textAlign: 'center'}}></Text>
      <Text style={{paddingTop: 10, textAlign: 'center'}}></Text>
      <Text style={{paddingTop: 10, textAlign: 'center'}}></Text>
    </View>
  );
};

export default AgeCalculator;
