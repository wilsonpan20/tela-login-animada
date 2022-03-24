import React from 'react';
import GlobalStyle from './styles/global'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import history from './services/history';

function App() {
  return (

    <BrowserRouter>
    <GlobalStyle/>
    <Routes history={history}/>
    </BrowserRouter>
  
  );
}

export default App;
