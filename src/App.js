
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Holiday from "./pages/Holiday";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="holiday" element={ <Holiday /> } />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
