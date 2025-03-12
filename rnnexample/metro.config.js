const {getDefaultConfig} = require('expo/metro-config');
const {mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    blockList: [
      ...Array.from(defaultConfig.resolver.blockList ?? []),
      new RegExp(path.resolve('..', 'node_modules', 'react')),
      new RegExp(path.resolve('..', 'node_modules', 'react-native')),
    ],

    nodeModulesPaths: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, '../node_modules'),
    ],

    extraNodeModules: {
      'expo-transparent-video': '..',
    },
  },

  watchFolders: [path.resolve(__dirname, '..')],

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = mergeConfig(defaultConfig, config);
