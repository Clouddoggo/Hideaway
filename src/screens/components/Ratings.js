import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import star from '../../../assets/ratingstar.png';

const Ratings = () => {
  return (
    <View>
      <Text style={styles.subtitle}>Cleanliness was...</Text>
      <View style={styles.horizontalList}>
        <TouchableHighlight style={styles.starIconContainer}>
          <Image style={styles.starIcons} source={star} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.starIconContainer}>
          <Image style={styles.starIcons} source={star} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.starIconContainer}>
          <Image style={styles.starIcons} source={star} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.starIconContainer}>
          <Image style={styles.starIcons} source={star} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.starIconContainer}>
          <Image style={styles.starIcons} source={star} />
        </TouchableHighlight>
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
  starIconContainer: {
    marginTop: -5,
    marginLeft: 0,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    overflow: 'hidden',
    elevation: 0
  }
});

export default Ratings;
