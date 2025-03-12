import React, {FC} from 'react';

import {Button, SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {Navigation, NavigationProps} from 'react-native-navigation';
import {VideoPlayer} from './VideoPlayer';

export const RootScreen: FC<NavigationProps> = ({componentId}) => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.sectionTitle}>RootScreen</Text>

      <Button
        title="Go to other screen"
        onPress={() =>
          Navigation.push(componentId, {component: {name: 'PushScreen'}})
        }
      />

      {Array.from({length: 15}).map((_, index) => (
        <VideoPlayer
          key={index}
          uri="https://github.com/tritus/android_transparent_video/raw/refs/heads/main/sample/src/main/res/raw-hdpi/thunder_loader.webm"
          style={styles.video}
        />
      ))}
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

  video: {
    width: 250,
    height: 250,
  },
});
