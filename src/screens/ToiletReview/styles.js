import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 20
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: '#788eec',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  coverImage: {
    width: '100%',
    height: 300
  },
  textView: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  imageText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  buttonView: {
    position: 'absolute',
    top: 45,
    left: 30
  },
  buttonStyle: {
    backgroundColor: '#41AAEE',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 10
  },
  containerStyle: {
    width: 160,
    marginHorizontal: 20,
    marginVertical: 30
  },
  reviewHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  list: {
    marginTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: 'transparent',
    width: '85%'
  }
});
