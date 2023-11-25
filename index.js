import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderStyle: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});

const LoadingView = ({
  containerStyle = styles.container,
  children,
  isLoading,
  backgroundColor = "#FFF",
  text,
  textStyle,
  loaderStyle = styles.loaderStyle,
  indicatorColor = "#000",
  indicatorSize = Platform.select({
    ios: "large",
    android: 75,
  }),
  unmount,
  renderLoader,
}) => {
  const showContent = useMemo(
    () => (unmount ? !isLoading : true),
    [isLoading, unmount]
  );

  const renderLoadingIndicator = () =>
    renderLoader ? (
      renderLoader()
    ) : (
      <ActivityIndicator
        color={indicatorColor}
        size={indicatorSize}
        animating
      />
    );

  const renderLoaderComponent = () => (
    <View style={[StyleSheet.absoluteFill, loaderStyle, { backgroundColor }]}>
      {renderLoadingIndicator()}
      {text && <Text style={textStyle}>{text}</Text>}
    </View>
  );

  return (
    <View style={containerStyle}>
      {showContent && children}
      {isLoading && renderLoaderComponent()}
    </View>
  );
};

LoadingView.propTypes = {
  containerStyle: PropTypes.object,
  children: PropTypes.element.isRequired,
  isLoading: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  textStyle: PropTypes.object,
  loaderStyle: PropTypes.object,
  indicatorColor: PropTypes.string,
  indicatorSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unmount: PropTypes.bool,
  renderLoader: PropTypes.func,
};

export default React.memo(LoadingView);
