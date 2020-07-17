import React, { Component } from "react";
import { connect } from "react-redux";
import ListCard from "../components/ListCard";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { setSearchField, requestMonsters } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchMonsters.searchField,
    monsters: state.requestMonsters.monsters,
    isPending: state.requestMonsters.isPending,
    error: state.requestMonsters.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestMonsters: () => dispatch(requestMonsters()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestMonsters();
  }

  render() {
    const { searchField, onSearchChange, monsters, isPending } = this.props;
    const filteredmonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1 className="tc pt5">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">MonsterFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <ListCard monsters={filteredmonsters} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
