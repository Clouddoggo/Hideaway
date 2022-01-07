import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';

const ExitCross = () => {
  return (
    <View>
      <TouchableHighlight>
        <Image style={styles.cross} source={require('../assets/cross.png')} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  cross: {
    height: 15,
    width: 15,
    marginTop: 10,
    marginLeft: 290,
    marginBottom: -50
  }
});

export default ExitCross;
