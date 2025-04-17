import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RoleSwitcher = () => {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 20 }}>
      <Button title="Login as User" onPress={() => navigation.navigate('UserLogin')} />
      <Button title="Login as Advocate" onPress={() => navigation.navigate('AdvocateLogin')} />
      <Button title="Login as Admin" onPress={() => navigation.navigate('AdminLogin')} />
    </View>
  );
};

export default RoleSwitcher;