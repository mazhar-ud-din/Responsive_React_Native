import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk'
import AuthReducer from './Reducer/Reducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['age'], //blacklisting a store attribute name, will not persist that store attribute.
}

const persistedReducer = persistReducer(persistConfig, AuthReducer)

const store = configureStore({
  reducer: {
    persistedReducer
  },
  middleware: [thunk]
})

const persistor = persistStore(store)
export { store, persistor }




