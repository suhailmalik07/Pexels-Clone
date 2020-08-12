import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import PhotosPage from './Pages/PhotosPage';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "photosPage"
    }
  }

  switchPage = () => {
    this.setState({
      page: this.state.page === "homePage" ? "photos" : "homePage",
    })
  }

  render() {
    const { page } = this.state
    return (
      <div>
        {page === "homepage" ? <Homepage switchPage={this.switchPage} /> : <PhotosPage />}
      </div>
    );

  }
}
