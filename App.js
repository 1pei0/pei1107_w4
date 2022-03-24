import React from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider bg="#fff"  h="0">
      {/* <SafeAreaView style={{ flex: 1 }}> */}
        <NativeBaseProvider bg="#fff" >
        <Navigation />
        </NativeBaseProvider>
      {/* </SafeAreaView> */}
     </SafeAreaProvider>

  );
}

export default App;

