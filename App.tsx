import React from 'react';
import {StatusBar,TextInput} from 'react-native';
import Movies from './src/components/Movies/Movies';


const App: () => React$Node = () => {

  return (
    <>
    <StatusBar barStyle="dark-content" hidden />
    
    <Movies /> 
    </>
  );
};



export default App;
