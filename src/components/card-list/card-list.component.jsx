import { computeHeadingLevel } from "@testing-library/react";
import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class Cardlist extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monsters) => {
          return <Card monsterProp={monsters} />;
        })}
      </div>
    );
  }
}

export default Cardlist;
