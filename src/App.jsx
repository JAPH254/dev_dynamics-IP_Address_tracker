import { useState } from "react";
import "./App.css";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
function App() {
  return (
    <div>
      <div className="search-area">
        <SearchBar />
        <Result
          ipAddress="192.212.174.101"
          location="Brooklyn, NY, 10001"
          timeZone="utc-05:00"
          isp="spacex starlink"
        />
      </div>
      <Map />
    </div>
  );
}

export default App;
