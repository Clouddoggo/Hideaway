import React from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import { Button, ListItem, Text } from 'react-native-elements';
import src from '../../../assets/src.jpg';
import { Icon } from 'react-native-elements';
import styles from './styles';

export default function ToiletReview({ navigation }) {
  const onAddReview = () => {
    navigation.navigate('Review');
  };

  const reviewItems = [
    {
      user: 'Anonymous cat',
      datetime: '1 Jan 2022, 1.51pm',
      stars: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '
    },
    {
      user: 'Anonymous cow',
      datetime: '1 Jan 2022, 1.52pm',
      stars: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '
    },
    {
      user: 'Anonymous pig',
      datetime: '1 Jan 2022, 1.53pm',
      stars: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '
    },
    {
      user: 'Anonymous nyan cat',
      datetime: '1 Jan 2022, 1.54pm',
      stars: 4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore '
    }
  ];

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    >
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
      <View>
        <Text style={styles.reviewHeader}>{reviewItems.length} Reviews</Text>
        <View style={styles.list}>
          {reviewItems.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold', fontSize: 18 }}>
                  {l.user}
                </ListItem.Title>

                <ListItem.Subtitle>{l.datetime}</ListItem.Subtitle>
                <Text>{l.description}</Text>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
