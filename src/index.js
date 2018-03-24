import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import {injectGlobal} from 'styled-components'

injectGlobal`
  h1 {
    font-family: sans-serif;
    color: crimson;
  }
`

ReactDOM.render(<h1>React App with Styled Components</h1>, document.getElementById('root'));
registerServiceWorker();
