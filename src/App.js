import React from "react";
import "./App.css";
import {
  Header,
  Homepage,
  Coinpage,
  Footer,
  News,
  NotFound,
} from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/coins/:id" element={<Coinpage />} />
          <Route exact path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
