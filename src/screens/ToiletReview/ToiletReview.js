import React from 'react';
import { TouchableOpacity, Text, View, ImageBackground } from 'react-native';
import utown from '../../../assets/utown.jpg';
import styles from './styles';

export default function ToiletReview({ navigation }) {
  const onAddReview = () => {
    navigation.navigate('Review');
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.coverImage} source={utown}>
        <View style={styles.textView}>
          <Text style={styles.imageText}>UTOWN SRC LEVEL 2</Text>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.button} onPress={onAddReview}>
        <Text style={styles.buttonTitle}>Add Review</Text>
      </TouchableOpacity>
    </View>
  );
}
