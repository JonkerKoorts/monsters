import { computeHeadingLevel } from "@testing-library/react";
import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const Cardlist = (
  { monsters } // Functional
) => (
  <div className="card-list">
    {monsters.map((monsters) => {
      return <Card monster={monsters} />;
    })}
  </div>
);

// class Cardlist extends Component { // Class
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monsters) => {
//           return <Card monsterProp={monsters} />;
//         })}
//       </div>
//     );
//   }
// }

export default Cardlist;
