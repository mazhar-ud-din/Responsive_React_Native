import React from 'react'
import { Provider } from 'react-redux'
import Routes from './src/Navigation/Routes'
import  {store, persistor } from './src/Redux/store'
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App