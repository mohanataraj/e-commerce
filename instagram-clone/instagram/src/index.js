import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render( <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


// client side rendered app: react (CRA)
// -> connect to firebase db
// -> react-loading-skeleton
// tailwind css

// architecture 
  //src 
    //-> components, 
    //-> constants, 
    //-> context, 
    //-> helpers,
    //-> lib(firebase is going to live here), 
    //-> services(firebase funcs),
    // -> style (tailwind)