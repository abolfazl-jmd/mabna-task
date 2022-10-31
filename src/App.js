import "./App.css";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";

function App() {
  return (
    <div id="app">
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
