import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import axios from '../api/axios';

export default function AdvocateRegisterForm({ navigation }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    barId: '', expertise: '', experience: '',
    feeStructure: '', kyc: '', gst: ''
  });

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/advocate/register', form);
      alert('Submitted! Await admin approval.');
      navigation.goBack();
    } catch (err) {
      alert('Error during submission');
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      {Object.keys(form).map((key) => (
        <View key={key}>
          <Text>{key.toUpperCase()}</Text>
          <TextInput value={form[key]} onChangeText={(val) => handleChange(key, val)} />
        </View>
      ))}
      <Button title="Submit Registration" onPress={handleSubmit} />
    </ScrollView>
  );
}