import { useState } from "react";
import Create from "./components/Create";
import Post from "./components/Post";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <h1>WElcome Crud</h1>
      {/* <Create /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/Read" element={<Read />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
