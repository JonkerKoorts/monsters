import { Component } from "react";

import Cardlist from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      )
    );
  } // Mounting is the first time when a application gets rendered onto the dom.

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monster Filter</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeHolder="Search Monsters"
          className="monstersSearchBox"
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
