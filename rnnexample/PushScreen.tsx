import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

export const PushScreen = () => (
  <SafeAreaView style={styles.wrapper}>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.sectionTitle}>PushScreen</Text>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ccc',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
