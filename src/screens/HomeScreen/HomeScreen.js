import { signOut } from 'firebase/auth';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { auth } from '../../firebase/config';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const onLogout = () => {
    navigation.navigate('Login');
    return signOut(auth);
  };

  const goToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={async () => onLogout()}>
        <Text style={styles.buttonTitle}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => goToDetails()}
      >
        <Text style={styles.buttonTitle}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}
