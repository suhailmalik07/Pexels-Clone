import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "homepage"
    }
  }

  switchPage = () => {
    this.setState({
      page: this.state.page === "homepage" ? "photos" : "homepage",
    })
  }

  render() {
    return (
      <div>
        {this.state.page === "homepage" && <Homepage switchPage={this.switchPage} />}
      </div>
    );

  }
}
