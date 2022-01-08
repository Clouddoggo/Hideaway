import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  formContainer: {
    flexDirection: 'row',
    height: 80,
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingLeft: 16,
    flex: 1,
    marginRight: 5
  },
  listContainer: {
    marginTop: 20,
    padding: 20
  },
  suggestedHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  list: {
    marginTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: 'transparent',
    width: '85%'
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
  }
});
