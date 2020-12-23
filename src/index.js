import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css'

import { Provider } from 'react-redux'
import generateStore from './redux/store'


import { Is93 } from './is93';


const store= generateStore()

ReactDOM.render(
  
  <Provider store ={store}>
      <Is93/>
  </Provider>,

  document.getElementById('root')
);
