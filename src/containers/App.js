import React from "react";
import ListCard from "../components/ListCard";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc pt5">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">MonsterFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ListCard robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
