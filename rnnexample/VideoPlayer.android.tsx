import React, {forwardRef, useImperativeHandle} from 'react';
import {TransparentVideoView, useVideoPlayer} from 'expo-transparent-video';

import {type VideoPlayerMethods, type VideoPlayerProps} from './VideoPlayer';

export const VideoPlayer = forwardRef<VideoPlayerMethods, VideoPlayerProps>(
  ({uri, style}, ref) => {
    const player = useVideoPlayer(uri);

    player.loop = true;
    player.play();

    useImperativeHandle(ref, () => ({
      play: () => {
        player.play();
      },

      pause: () => {
        player.pause();
      },
    }));

    return <TransparentVideoView player={player} style={style} />;
  },
);
