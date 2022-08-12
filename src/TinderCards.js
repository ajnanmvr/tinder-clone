import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Muhammed Ajnan",
      url: "https://avatars.githubusercontent.com/u/94433947?v=4",
    },
    {
      name: "Janish Nehyan",
      url: "https://avatars.githubusercontent.com/u/85396611?v=4",
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log(`removing ${nameToDelete}`);
  };
  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
