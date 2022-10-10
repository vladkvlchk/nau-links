import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>NAU ROUTER</h1>
      <Link to="/links/faculties">
        <button>факультети</button>
      </Link>
      <Link to="/links/SR">
        <button>СР</button>
      </Link>
      <Link to="/links/dorms">
        <button>гуртожитки</button>
      </Link>
    </div>
  );
};

export default Home;
