import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import PhotosPage from './Pages/PhotosPage';
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
