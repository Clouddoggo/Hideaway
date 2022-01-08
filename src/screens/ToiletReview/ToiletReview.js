import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import src from '../../../assets/src.jpg';
import { Icon } from 'react-native-elements';
import styles from './styles';

export default function ToiletReview({ navigation }) {
  const onAddReview = () => {
    navigation.navigate('Review');
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.coverImage} source={src}>
        <View style={styles.buttonView}>
          <Icon
            reverse
            name="arrow-back-outline"
            type="ionicon"
            color="#788eec"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.imageText}>UTown SRC Level 2</Text>
        </View>
      </ImageBackground>
      <Button
        title="Add review"
        icon={{
          name: 'edit',
          type: 'feather',
          size: 18,
          color: 'white'
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10 }}
        titleStyle={{ fontWeight: '500' }}
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.containerStyle}
        onPress={onAddReview}
      />
    </View>
  );
}
