import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import VideoContentScreen from './pages/VideoContentScreen'
import Header from './components/Header'
import NewVideoContentScreen from './pages/NewVideoContentScreen';
import EditVideoContentScreen from './pages/EditVideoContentScreen';
import ShowVideoContentScreen from './pages/ShowVideoContentScreen';
function App() {

  return (
    <BrowserRouter>
      <main>
        <Header />
        <Switch>
          <Route path='/video-content/new' component={NewVideoContentScreen}></Route>
          <Route path='/video-content/:id/edit' component={EditVideoContentScreen}></Route>
          <Route path='/video-content/:id' component={ShowVideoContentScreen}></Route>
          <Route path='/' component={VideoContentScreen}></Route>
        </Switch>
      </main>
    </BrowserRouter>


  );
}

export default App;
