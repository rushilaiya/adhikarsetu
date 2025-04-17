import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from '../api/axios';

export default function EngagementScreen() {
  const [engagements, setEngagements] = useState([]);

  useEffect(() => {
    axios.get('/engagements').then(res => setEngagements(res.data));
  }, []);

  const handleMilestone = async (id) => {
    await axios.post(`/engagements/${id}/milestone`);
    alert('Milestone marked');
  };

  return (
    <FlatList
      data={engagements}
      keyExtractor={item => item._id}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>With: {item.otherParty}</Text>
          <Text>Status: {item.status}</Text>
          <Button title="Mark Milestone" onPress={() => handleMilestone(item._id)} />
        </View>
      )}
    />
  );
}