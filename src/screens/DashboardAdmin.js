import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DashboardAdmin({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Admin Panel</Text>
      <Button title="Verify Advocates" onPress={() => navigation.navigate('VerifyAdvocates')} />
    </View>
  );
}