import React from "react";
import Card from "./Card";

const ListCard = ({ monsters }) => {
  // if (true) {
  //   throw new Error('');
  // }
  return (
    <div>
      {monsters.map((user, i) => {
        return (
          <Card
            key={i}
            id={monsters[i].id}
            name={monsters[i].name}
            email={monsters[i].email}
          />
        );
      })}
    </div>
  );
};

export default ListCard;
