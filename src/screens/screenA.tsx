import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function ScreenA() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Home
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#215959",
        justifyContent: 'center'
    },
    title: {
      color: '#50D9D9',
      alignSelf: 'center',
      fontSize: 20
    }

}) 