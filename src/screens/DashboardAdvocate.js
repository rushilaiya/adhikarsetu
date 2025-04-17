import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DashboardAdvocate({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Advocate Dashboard</Text>
      <Button title="View Engagements" onPress={() => navigation.navigate('Engagement')} />
    </View>
  );
}