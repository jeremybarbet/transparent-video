import {RootScreen} from './RootScreen';
import {PushScreen} from './PushScreen';
import {Navigation} from 'react-native-navigation';

Navigation.registerComponent('RootScreen', () => RootScreen);
Navigation.registerComponent('PushScreen', () => PushScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'RootScreen',
            },
          },
        ],
      },
    },
  });
});
