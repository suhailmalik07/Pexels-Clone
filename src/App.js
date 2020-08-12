import React from "react";
import Tablet from "./Components/Tablet";
import OptionBoxes from "./Components/OptionBoxes";
import SearchBar from "./Components/SearchBar";
import NavLink from "./Components/NavLink";
import NavBar from "./Components/NavBar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    console.log("handle change called");
  }
  render() {
    return (
      <div className="App">
        <Tablet name="Test" url={"http://via.placeholder.com/30"} />
        <Tablet name="Temperature" url={"http://via.placeholder.com/30"} />
        <Tablet
          name="Weather"
          url={"http://via.placeholder.com/30"}
          count={46}
        />
        <OptionBoxes
          name="Test"
          url={"http://via.placeholder.com/30"}
          count={40}
        />
        <OptionBoxes
          name="Temperature"
          url={"http://via.placeholder.com/30"}
          count={80}
        />
        <OptionBoxes
          name="Weather"
          url={"http://via.placeholder.com/30"}
          count={90}
        />
        <SearchBar
          searchIcon={"http://via.placeholder.com/30"}
          search={this.handleChange}
        />
        <NavLink link={"https://www.google.com"} name={"Google"} />
        <NavBar links={["link1", "link2", "link3", "link4"]} />
      </div>
    );
  }
}
