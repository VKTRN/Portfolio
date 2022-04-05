import React from 'react';
import App from '../shop/App'
import {Provider} from 'react-redux'
import { store, persistor } from '../shop/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const Shop = () => {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}

export default Shop