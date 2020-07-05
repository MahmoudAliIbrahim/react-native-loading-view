import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import LoadingView from '@mahmoudaliibrahim/react-native-loading-view';

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <LoadingView containerStyle={styles.container} isLoading={loading}>
      <Text>Hello React</Text>
    </LoadingView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
