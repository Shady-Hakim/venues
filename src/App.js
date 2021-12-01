import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
              <Routes />
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
