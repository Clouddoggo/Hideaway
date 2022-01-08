import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import ToiletType from '../components/ToiletType';
import Ratings from '../components/Ratings';
import WaitingTime from '../components/WaitingTime';
import { Icon } from 'react-native-elements';

const CloseBtn = ({ onClose }) => {
  return (
    <View style={styles.closeBtn}>
      <Icon name="x" type="feather" onPress={onClose} />
    </View>
  );
};

const FormBtns = ({ onPress }) => {
  return (
    <View style={styles.buttonGroup}>
      <Button
        title="Cancel"
        titleStyle={{ fontWeight: '500' }}
        buttonStyle={styles.cancelButtonStyle}
        containerStyle={styles.containerStyle}
        onPress={onPress}
      />
      <Button
        title="Submit"
        titleStyle={{ fontWeight: '500' }}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.containerStyle}
        onPress={onPress}
      />
    </View>
  );
};

const ReviewScreen = ({ navigation }) => {
  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View styles={styles.wrapper}>
      <CloseBtn onClose={onClose} />
      <View style={styles.container}>
        <Text style={styles.headline}>How was your visit?</Text>
        <ToiletType />
        <Ratings />
        <WaitingTime />
        <FormBtns onPress={onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  },
  container: {
    alignItems: 'center',
    padding: 50
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 40
  },
  cancelButtonStyle: {
    backgroundColor: '#ACB4B9',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 10
  },
  buttonStyle: {
    backgroundColor: '#41AAEE',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 10
  },
  containerStyle: {
    width: 110,
    marginHorizontal: 20,
    marginVertical: 30
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  closeBtn: {
    position: 'absolute',
    justifyContent: 'center',
    top: 60,
    right: 30
  }
});

export default ReviewScreen;
