import { signOut } from 'firebase/auth';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { auth } from '../../firebase/config';

export default function HomeScreen({ navigation }) {
  const onLogout = () => {
    navigation.navigate('Login');
    return signOut(auth);
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={async () => onLogout()}>
        <Text style={styles.buttonTitle}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
}
