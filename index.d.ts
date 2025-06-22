import { JSX, ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle, ActivityIndicatorProps } from "react-native";

export interface LoadingViewProps {
  containerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  isLoading: boolean;
  backgroundColor?: string;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  loaderStyle?: StyleProp<ViewStyle>;
  indicatorColor?: string;
  indicatorSize?: ActivityIndicatorProps["size"] | number;
  unmount?: boolean;
  renderLoader?: () => ReactNode;
}

declare const LoadingView: React.MemoExoticComponent<(props: LoadingViewProps) => JSX.Element>;

export default LoadingView;
