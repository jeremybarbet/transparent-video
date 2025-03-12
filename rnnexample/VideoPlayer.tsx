import {forwardRef} from 'react';
import {type StyleProp, type ViewStyle} from 'react-native';

interface VideoPlayerStyle extends Omit<ViewStyle, 'width' | 'height'> {
  width: number;
  height: number;
}

export interface VideoPlayerProps {
  uri: string;
  style: StyleProp<VideoPlayerStyle>;
}

export interface VideoPlayerMethods {
  play(): void;
  pause(): void;
}

export const VideoPlayer = forwardRef<VideoPlayerMethods, VideoPlayerProps>(
  (_props, _ref) => null,
);
