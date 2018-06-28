import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import NavBar from './NavBar';

function App(){
  return (
    <div className='app'>
      <style>{`
        .app {
          font-family: sans-serif;
        }
        `}
      </style>
      <Header/>
      <NavBar/>
      <Switch>
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
