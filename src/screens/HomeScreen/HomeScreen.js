import { signOut } from 'firebase/auth';
import React from 'react';
import { View } from 'react-native';
import { Button, ListItem, Text } from 'react-native-elements';
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

  const toilets = [
    {
      time: 1,
      area: 'UTown',
      location: 'SRC Level 2',
      stars: 4
    },
    {
      time: 0.4,
      area: 'UTown',
      location: 'SRC Level 2',
      stars: 4
    },
    {
      time: 1.5,
      area: 'UTown',
      location: 'SRC Level 2',
      stars: 4
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.suggestedHeader}>Suggested toilets</Text>
      <View style={styles.list}>
        {toilets.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={goToDetails}>
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: 'bold', fontSize: 18 }}>
                {l.location}
              </ListItem.Title>
              <ListItem.Subtitle>{l.area}</ListItem.Subtitle>
              <Text style={{ marginTop: 10 }}>{l.description}</Text>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
      <Button
        title="Logout"
        icon={{
          name: 'log-out',
          type: 'feather',
          size: 18,
          color: 'white'
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10 }}
        titleStyle={{ fontWeight: '500' }}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.containerStyle}
        onPress={async () => onLogout()}
      />
    </View>
  );
}
