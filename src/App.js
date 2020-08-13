import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import PhotosPage from './pages/PhotosPage';
import NavBar from './components/NavBar';
import { AppContext } from "./contexts/AppContextProvider";

export default class App extends React.Component {
  render() {
    const { page } = this.context
    return (
      <div>
        <NavBar />
        {page === "homePage" ?
          <Homepage /> :
          <PhotosPage />}
      </div>
    );

  }
}

App.contextType = AppContext
