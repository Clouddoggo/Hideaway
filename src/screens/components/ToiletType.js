import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

const ToiletType = () => {
  return (
    <View>
      <Text style={styles.subtitle}>I used...</Text>
      <View style={styles.horizontalList}>
        <View style={styles.shadowProp}>
          <TouchableHighlight style={styles.toiletIconContainer}>
            <Image
              style={styles.toiletTypeIcons}
              source={require('../../../assets/femaletoilet.png')}
            />
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.toiletIconContainer}>
          <Image
            style={styles.toiletTypeIcons}
            source={require('../../../assets/maletoilet.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight style={styles.toiletIconContainer}>
          <Image
            style={styles.toiletTypeIcons}
            source={require('../../../assets/handicaptoilet.png')}
          />
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
    width: '100%',
    justifyContent: 'space-around'
  },
  toiletTypeIcons: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  toiletIconContainer: {
    marginBottom: -20,
    height: 50,
    width: 50,
    borderRadius: 400,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    overflow: 'hidden',
    elevation: 0
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 50
  }
});

export default ToiletType;
