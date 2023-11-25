import React, { useState, useEffect } from "react";
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
  containerStyle,
  children,
  isLoading,
  backgroundColor,
  text,
  textStyle,
  loaderStyle: propLoaderStyle,
  indicatorColor,
  indicatorSize,
  unmount,
  renderLoader,
}) => {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    if (unmount) {
      setShowContent(!isLoading);
    }
  }, [isLoading, unmount]);

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
    <View
      style={[StyleSheet.absoluteFill, propLoaderStyle, { backgroundColor }]}
    >
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

LoadingView.defaultProps = {
  containerStyle: styles.container,
  children: null,
  isLoading: false,
  backgroundColor: "#FFF",
  text: null,
  textStyle: null,
  loaderStyle: styles.loaderStyle,
  indicatorColor: "#000",
  indicatorSize: Platform.select({
    ios: "large",
    android: 75,
  }),
  unmount: false,
  renderLoader: null,
};

export default React.memo(LoadingView);
