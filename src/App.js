import React from 'react';
import './App.css'
import MainPage from './components/main-page/js.js';
import PublicationPage from './components/publications/js.js';
import PhotosPage from './components/photos/js.js';
import Contacts from './components/contacts/js.js';
import {HashRouter, Redirect, Route, Switch, Link} from "react-router-dom";
function App() {
  return (
    <div>
      <HashRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/main-page">Home</Link>
              </li>
              <li>
                <Link to="/publication-page">Posts</Link>
              </li>
              <li>
                <Link to="/photos-page">Photos</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Redirect to="/main-page" />
          </Route>
          <Route path="/main-page">
            <MainPage />
          </Route>
          <Route path="/publication-page">
            <PublicationPage />
          </Route>
          <Route path="/photos-page">
            <PhotosPage />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
