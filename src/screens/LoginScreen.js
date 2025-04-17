import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from '../api/axios';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('user'); // user / advocate / admin

  const handleLogin = async () => {
    try {
      const { data } = await axios.post('/auth/login', { phone });
      if (role === 'user') navigation.replace('UserDashboard');
      else if (role === 'advocate') navigation.replace('AdvocateDashboard');
      else navigation.replace('AdminDashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Phone Number</Text>
      <TextInput value={phone} onChangeText={setPhone} keyboardType="number-pad" />
      <Text>Role</Text>
      <TextInput value={role} onChangeText={setRole} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}