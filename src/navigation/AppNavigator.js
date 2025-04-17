import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardUser from '../screens/DashboardUser';
import DashboardAdvocate from '../screens/DashboardAdvocate';
import DashboardAdmin from '../screens/DashboardAdmin';
import AdvocateRegisterForm from '../screens/AdvocateRegisterForm';
import BookConsultation from '../screens/BookConsultation';
import EngagementScreen from '../screens/EngagementScreen';
import VerifyAdvocates from '../screens/VerifyAdvocates';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="UserDashboard" component={DashboardUser} />
      <Stack.Screen name="AdvocateDashboard" component={DashboardAdvocate} />
      <Stack.Screen name="AdminDashboard" component={DashboardAdmin} />
      <Stack.Screen name="AdvocateRegister" component={AdvocateRegisterForm} />
      <Stack.Screen name="BookConsultation" component={BookConsultation} />
      <Stack.Screen name="Engagement" component={EngagementScreen} />
      <Stack.Screen name="VerifyAdvocates" component={VerifyAdvocates} />
    </Stack.Navigator>
  );
}