// import storage from 'redux-persist/lib/storage'; this is used on ReactJS
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gympoint',
      storage: AsyncStorage,
      whitelist: ['auth', 'help_order'],
    },
    reducers
  );

  return persistedReducer;
};
