import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import ToiletType from '../components/ToiletType';
import Ratings from '../components/Ratings';
import WaitingTime from '../components/WaitingTime';
import { Icon } from 'react-native-elements';
import styles from './styles';

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

export default ReviewScreen;
