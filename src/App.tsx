import React from 'react';
import Login from './components/login/Login';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store = {store}>
    <div className="App">
    <Login/>
    </div>
    </Provider>
  );
}

export default App;
