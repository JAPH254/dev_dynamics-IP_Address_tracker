import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <SearchBar />
      <Map />
    </div>
  );
}

export default App;
