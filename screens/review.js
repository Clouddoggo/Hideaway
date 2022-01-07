import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import ToiletType from '../containers/ToiletType';
import Ratings from '../containers/Ratings';
import WaitingTime from '../containers/WaitingTime';
import SubmitCancelButtons from '../containers/SubmitCancelButtons';
import ExitCross from '../containers/ExitCross';

const Review = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExitCross />
      <Text style={styles.headline}>How was your visit?</Text>
      <ToiletType />
      <Ratings />
      <WaitingTime />
      <SubmitCancelButtons />
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
  }
});

export default Review;
