import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const SubmitCancelButtons = () => {
  return (
    <View style={styles.horizontalList}>
      <Button color="grey" title="Cancel" />
      <Button title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalList: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'
  }
});

export default SubmitCancelButtons;
