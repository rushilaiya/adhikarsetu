import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DashboardUser({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>User Dashboard</Text>
      <Button title="Book Consultation" onPress={() => navigation.navigate('BookConsultation')} />
      <Button title="Engagement Portal" onPress={() => navigation.navigate('Engagement')} />
    </View>
  );
}