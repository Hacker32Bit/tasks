import React from "react";
import "./header.css";
import Button from "../Button";

export default function Header() {
  return (
    <div className="container">
      <div className="text">
        <h1>Amazing Heading Text Right Here</h1>
        <p>
          Expenses as material breeding insisted building to in. Continual so
          distrusts pronounce by unwilling listening. Thing do taste on we
          manor. Him had wound use found hoped. Of distrusts immediate enjoyment
          curiosity do. Marianne saw thoughts the humoured.
        </p>
        <button>Donwload for IOS</button>
        <button>Donwload for Android</button>
        {/* <Button>Donwload for IOS</Button>
        <Button>Donwload for Android</Button> */}
      </div>
      <div className="image">IMG object here</div>
    </div>
  );
}
