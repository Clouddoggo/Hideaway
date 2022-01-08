import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import ToiletType from '../components/ToiletType';
import Ratings from '../components/Ratings';
import WaitingTime from '../components/WaitingTime';

const CloseBtn = ({ onClose }) => {
  return (
    <TouchableOpacity onPress={onClose}>
      <Image
        style={styles.cross}
        source={require('../../../assets/cross.png')}
      />
    </TouchableOpacity>
  );
};

const FormBtns = ({ onPress }) => {
  return (
    <View style={styles.footerView}>
      <TouchableOpacity style={styles.buttonTitle} onPress={onPress}>
        <Text>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonTitle} onPress={onPress}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const ReviewScreen = ({ navigation }) => {
  const onClose = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CloseBtn onClose={onClose} />
        <Text style={styles.headline}>How was your visit?</Text>
        <ToiletType />
        <Ratings />
        <WaitingTime />
        <FormBtns onPress={onClose} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 55
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 50,
    width: 300
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  footerView: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around'
  }
});

export default ReviewScreen;
