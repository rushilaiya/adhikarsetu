import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from '../api/axios';

export default function BookConsultation() {
  const [advocates, setAdvocates] = useState([]);

  useEffect(() => {
    axios.get('/advocate/approved').then(res => setAdvocates(res.data));
  }, []);

  const handleBook = async (id) => {
    await axios.post('/consultation/book', { advocateId: id });
    alert('Consultation booked!');
  };

  return (
    <FlatList
      data={advocates}
      keyExtractor={item => item._id}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name} - {item.expertise}</Text>
          <Button title="Book" onPress={() => handleBook(item._id)} />
        </View>
      )}
    />
  );
}