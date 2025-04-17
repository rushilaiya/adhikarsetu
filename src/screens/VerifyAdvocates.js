import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from '../api/axios';

export default function VerifyAdvocates() {
  const [pending, setPending] = useState([]);

  useEffect(() => {
    axios.get('/admin/pending-advocates').then(res => setPending(res.data));
  }, []);

  const approve = async (id) => {
    await axios.post(`/admin/approve-advocate/${id}`);
    alert('Approved!');
  };

  return (
    <FlatList
      data={pending}
      keyExtractor={item => item._id}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name} - {item.barId}</Text>
          <Button title="Approve" onPress={() => approve(item._id)} />
        </View>
      )}
    />
  );
}