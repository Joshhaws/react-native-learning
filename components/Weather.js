import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Weather = () => {
  return (
    <View style={Stylesheet.container}>
      <View style={Stylesheet.headerContainer} />
      <View style={Stylesheet.bodyContainer} />
    </View>
  );
};

const styles = StyleSheet ({
  container: {
    flex: 1
  },
  headerContainer: {},
  bodyContainer: {}
});

export default Weather;