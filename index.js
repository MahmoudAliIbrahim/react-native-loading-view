import PropTypes from "prop-types";
import React, { Component } from "react";
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

export default class LoadingView extends Component {
  static propTypes = {
    containerStyle: PropTypes.object,
    children: PropTypes.element.isRequired,
    isLoading: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    textStyle: PropTypes.object,
    loaderStyle: PropTypes.object,
    indicatorColor: PropTypes.string,
    indicatorSize: PropTypes.string || PropTypes.number,
    unmount: PropTypes.bool,
  };

  static defaultProps = {
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
  };

  renderLoader() {
    const {
      backgroundColor,
      text,
      textStyle,
      loaderStyle,
      indicatorColor,
      indicatorSize,
    } = this.props;
    return (
      <View style={[StyleSheet.absoluteFill, loaderStyle, { backgroundColor }]}>
        <ActivityIndicator
          color={indicatorColor}
          size={indicatorSize}
          animating
        />
        <Text style={textStyle}>{text}</Text>
      </View>
    );
  }

  render() {
    const { containerStyle, children, isLoading, unmount } = this.props;
    let showContent;
    if (unmount) {
      showContent = unmount && isLoading ? false : true;
    } else {
      showContent = true;
    }
    return (
      <View style={containerStyle}>
        {showContent && children}
        {isLoading && this.renderLoader()}
      </View>
    );
  }
}
