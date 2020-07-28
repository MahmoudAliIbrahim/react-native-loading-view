# @mahmoudaliibrahim/react-native-loading-view

## Getting started

A simple loading view for react-native apps, can be used while fetching data from remote server.

npm:

`$ npm install @mahmoudaliibrahim/react-native-loading-view --save`

yarn:

`$ yarn add @mahmoudaliibrahim/react-native-loading-view`

## PropTypes

| Prop            | Description                                                  | Type             |
| --------------- | ------------------------------------------------------------ | ---------------- |
| containerStyle  | the containing view style                                    | Object           |
| children        | view to be wrapped by the loading view                       | React Component  |
| isLoading       | current loading view state                                   | Boolean          |
| backgroundColor | loading view background color                                | String           |
| text            | optional text to show during loading                         | String           |
| textStyle       | optional text style                                          | Object           |
| loaderStyle     | loader container style                                       | Object           |
| indicatorColor  | color of the loading indicator                               | String           |
| indicatorSize   | loading indicator size (React native ActivityIndicator size) | String or Number |
| unmount         | boolean to unmount the children view while isLoading is true | Boolean          |

## Usage

```javascript
import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import LoadingView from "@mahmoudaliibrahim/react-native-loading-view";

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <LoadingView
      containerStyle={styles.container}
      isLoading={loading}
      size={"small"}
      unmount
    >
      <Text>Hello React</Text>
    </LoadingView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
```
