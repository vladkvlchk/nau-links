import { Route, Routes } from "react-router-dom";

import classes from "./App.module.scss";
import Home from "./pages/Home/Home";
import Links from "./pages/Links/Links";

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  );
}

export default App;
