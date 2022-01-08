import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ToiletType from '../components/ToiletType';
import Ratings from '../components/Ratings';
import WaitingTime from '../components/WaitingTime';

const CloseBtn = ({ onClose }) => {
  return (
    <TouchableOpacity onPress={onClose} style={styles.closeBtnContainer}>
      <Image
        style={styles.closeBtn}
        source={require('../../../assets/cross.png')}
      />
    </TouchableOpacity>
  );
};

const FormBtns = ({ onPress }) => {
  return (
    <View style={styles.buttonGroup}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const ReviewScreen = ({ navigation }) => {
  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CloseBtn onClose={onClose} />
      <Text style={styles.headline}>How was your visit?</Text>
      <ToiletType />
      <Ratings />
      <WaitingTime />
      <FormBtns onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 50
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 35
  },
  button: {
    backgroundColor: '#788eec',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  closeBtnContainer: {
    alignSelf: 'flex-end'
  },
  closeBtn: {
    height: 15,
    width: 15
  }
});

export default ReviewScreen;
