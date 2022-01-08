import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    padding: 20
  },
  container: {
    alignItems: 'center',
    padding: 50
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 40
  },
  cancelButtonStyle: {
    backgroundColor: '#ACB4B9',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 10
  },
  buttonStyle: {
    backgroundColor: '#41AAEE',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 10
  },
  containerStyle: {
    width: 110,
    marginHorizontal: 20,
    marginVertical: 30
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  closeBtn: {
    position: 'absolute',
    justifyContent: 'center',
    top: 60,
    right: 30
  }
});
