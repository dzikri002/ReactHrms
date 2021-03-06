import { StyleSheet } from 'react-native';
import colors from '../config/colors'
import dimen from '../config/dimen';

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  verticalView: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  horizontalView: {
    flexDirection: 'row'
  },
  buttonStyle: {
    flexDirection: 'row',
    flex: 1,
    fontSize: 12,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  },
  commanButton: {
    backgroundColor: colors.colorPrimary,
    paddingLeft: dimen.paddingMedium,
    paddingRight: dimen.paddingMedium,
    // color:colors.colorPrimaryDark
  },
  borderContainer: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 3,
    elevation: 1
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  roundedImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "gray"
  }})

export default baseStyles;