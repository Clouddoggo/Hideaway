import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';

const WaitingTime = () => {
  const [text, onChangeText] = React.useState('Tell us more!');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>
      <Text styles={styles.subtitle}>I waited for...</Text>
      <View style={styles.horizontalList}>
        <Image
          style={styles.starIcons}
          source={require('../assets/favicon.png')}
        />
      </View>
      <Text styles={styles.subtitle}>Comments</Text>
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 15,
    marginTop: 30
  },
  horizontalList: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'
  },
  starIcons: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  textInput: {
    height: 100,
    width: 280,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10
  }
});

export default WaitingTime;
