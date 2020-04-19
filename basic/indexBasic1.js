// In index.js of a new project
const {Navigation} = require('react-native-navigation');
const React = require('react');
const {View, Text, StyleSheet} = require('react-native');

const HomeScreen = props => {
  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>
    </View>
  );
};
Navigation.registerComponent('Home', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

/* Styling is the 1st */
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
