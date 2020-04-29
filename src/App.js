import React, { useState } from 'react';
import './App.css';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import RdxA from './views/RdxA';
import RdxB from './views/RdxB';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Slider from './views/Slider';
import Login from './views/login/Login';

const App = () => {

  return (
    <Provider store={store}>
      <div>
        {/* <RdxA />
        <RdxB /> */}
        {/* <Slider /> */}
        <Login />
      </div>
    </Provider>
  );
}

export default App;
