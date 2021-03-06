import { StyleSheet } from "react-native"

export default main = StyleSheet.create({
    container: {
        flex: 1,
      },
      avatarImg: {
        width: 90,
        height: 90,
        margin: 5,
        marginLeft: 20,
        borderRadius: 200
      },
      flatList: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 3
      },
      name: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
      },
      email: {
        flex: 1,
        justifyContent: 'center'
      },
      header: {
        backgroundColor: '#e95280',
        height: 60,
      },
      headerTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: -25
      },
      menuIcon: {
        textAlign: 'left',
        marginTop: 15,
        marginLeft: 20,
        fontSize: 25,
        color: '#FFFFFF'
      },
      searchIcon: {
        textAlign: 'right',
        marginTop: -25,
        marginRight: 20,
        fontSize: 25,
        color: '#FFFFFF'
      },
      fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#e95280',
        borderRadius: 50,
        bottom: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      fabContent: {
        color: '#FFFFFF',
        fontSize: 20
      }
});